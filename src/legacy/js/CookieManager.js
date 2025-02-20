export default class CookieManager
{
    static getCookie(cname)
    {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++)
        {
            let c = ca[i];
            while (c.charAt(0) == ' ')
            {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0)
            {
                return c.substring(name.length, c.length);
            }
        }
    }

    static setCookie(cname, val, path = "/")
    {
        document.cookie = `${cname}=${val};path=${path};max-age=31536000`;
    }

    static StorageType = Object.freeze({
        session: Object.freeze("sessionStorage"),
        local: Object.freeze("localStorage"),
    });

    static getStorage(type, key)
    {
        if(!CookieManager.storageAvailable(type)) return undefined;
        return window[type].getItem(key);
    }

    static setStorage(type, key, value)
    {
        if(!CookieManager.storageAvailable(type)) return undefined;
        return window[type].setItem(key, value);
    }

    static storageAvailable(type)
    {
        let storage;
        try
        {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e)
        {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }
}
