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

        if(item.type === "dir")
        {
            str += /*html*/`
                <details>
                    <summary>${arrowsHTML}${item.fileName}<span class="ellipsis path">...</span></summary>
                    <ul>
                        ${construct(item.fileList)}
                    </ul>
                </details>
            `;
        }
    }

    return str;
}

export const generate = function(fileList)
{
    return /*html*/`
    <hr>
    <details open>
        <summary>Site Tree</summary>
        <div class="site-tree">
            <section class="navlink-container">
                <section class="notextmargin">
                    <details open>
                        <summary><img src="/images/heroicons-chevron-right.svg" class="path path-icon ellipsis"><img src="/images/heroicons-chevron-down.svg" class="path path-icon arrow"><a class="no-underline" href="https://neocities.org/site/bscit" target="_blank"><b>root</b><span class="path">/</span></a><span class="ellipsis path">...</span></summary>
                        <ul>
                            <details open>
                                <summary><img src="/images/heroicons-chevron-right.svg" class="path path-icon ellipsis"><img src="/images/heroicons-chevron-down.svg" class="path path-icon arrow"><a class="no-underline" href="https://bscit.dev/home/"><b>bscit.dev</b><span class="path">/</span></a><span class="ellipsis path">...</span></summary>
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
