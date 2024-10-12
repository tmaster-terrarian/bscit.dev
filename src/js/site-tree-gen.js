import CookieManager from "./CookieManager.js";

const arrowsHTML = `<img src="/images/heroicons-chevron-right.svg" class="path path-icon ellipsis"><img src="/images/heroicons-chevron-down.svg" class="path path-icon arrow">`;

'use strict';

export const directory = function(fileName, fileList)
{
    const obj = {};
    obj.type = "dir";
    obj.fileName = fileName;
    obj.path = "/" + fileName;
    obj.fileList = fileList;

    return obj;
};

export const directory_file = function(fileName, fileList)
{
    const obj = {};
    obj.type = "dir+file";
    obj.fileName = fileName;
    obj.path = "/" + fileName;
    obj.fileList = fileList;

    return obj;
};

export const file = function(fileName)
{
    const obj = {};
    obj.type = "file";
    obj.fileName = fileName;
    obj.path = "/" + fileName;
    return obj;
};

function parse(fileList, fileName)
{
    const list = [];

    for(var i = 0; i < fileList.length; i++)
    {
        var item = fileList[i];

        item.path = `${fileName}` + item.fileName;

        if(item.type === "file")
        {
            var regex = /\.\w+$/.exec(item.fileName);

            if(regex !== null)
                item.fileName = item.fileName.replace(regex[0], `<span class="path">${regex[0]}</span>`);

            item.fileName = `<a href="${item.path}" class="no-underline">` + item.fileName
                .replace(/(?<!<)\//, `<span class="path">/</span>`)
                + `</a>`;
        }

        if(item.type === "dir+file")
        {
            item.fileList = parse(item.fileList, item.path);

            item.fileName = `<a href="${item.path}" class="no-underline"><b>` + item.fileName
                .replaceAll("/", `<span class="path">/</span>`)
                + `</a></b>`;
        }

        if(item.type === "dir")
        {
            item.fileList = parse(item.fileList, item.path);

            item.fileName = `<b>` + item.fileName
                .replaceAll("/", `<span class="path">/</span>`)
                + `</b>`;
        }

        list.push(item);
    }

    return list;
}

let index = 0;
function construct(fileList)
{
    let str = "";

    for(var i = 0; i < fileList.length; i++)
    {
        var item = fileList[i];

        if(item.type === "file")
        {
            str += `<li>${item.fileName}</li>`;
        }

        if(item.type === "dir" || item.type === "dir+file")
        {
            let ind = index++;
            let openAttr = "";
            if(CookieManager.getStorage(CookieManager.StorageType.local, `site-tree_${ind}`) === "open")
                openAttr = " open"

            str += /*html*/`
                <details id="site-tree_${ind}" class="site-tree-directory"${openAttr}>
                    <summary>${arrowsHTML}${item.fileName}<span class="ellipsis path">...</span></summary>
                    <ul>
                        ${construct(item.fileList)}
                    </ul>
                </details>
            `;
            ind++;
        }
    }

    return str;
}

export const generate = function(fileList)
{
    index = 0;

    return /*html*/`
    <hr>
    <details open>
        <summary>Site Tree</summary>
        <div class="site-tree">
            <section class="navlink-container">
                <section class="notextmargin">
                    <details id="site-tree_${index++}" class="site-tree-directory" open>
                        <summary><img src="/images/heroicons-chevron-right.svg" class="path path-icon ellipsis"><img src="/images/heroicons-chevron-down.svg" class="path path-icon arrow"><a class="no-underline" href="https://neocities.org/site/bscit" target="_blank"><b>root</b><span class="path">/</span></a><span class="ellipsis path">...</span></summary>
                        <ul>
                            <details id="site-tree_${index++}" class="site-tree-directory" open>
                                <summary><img src="/images/heroicons-chevron-right.svg" class="path path-icon ellipsis"><img src="/images/heroicons-chevron-down.svg" class="path path-icon arrow"><a class="no-underline" href="/"><b>bscit.dev</b><span class="path">/</span></a><span class="ellipsis path">...</span></summary>
                                <ul>
                                    ${construct(parse(fileList, "/"))}
                                </ul>
                            </details>
                        </ul>
                    </details>
                </section>
            </section>
        </div>
    </details>`;
};
