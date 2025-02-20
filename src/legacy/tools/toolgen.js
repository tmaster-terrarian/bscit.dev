const __tools = document.getElementById("tools")

function genWeb(imageSrc, link, name, descriptionHtml)
{
    document.currentScript.outerHTML = /*html*/`
    <div class="tool widget">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3><p><a href="${link}" target="_blank">online</a></p></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}

function genApp(imageSrc, link, name, descriptionHtml)
{
    document.currentScript.outerHTML = /*html*/`
    <div class="tool widget">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3><p><a href="${link}" target="_blank">download</a></p></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}

function genWebApp(imageSrc, linkWeb, linkLocal, name, descriptionHtml)
{
    document.currentScript.outerHTML = /*html*/`
    <div class="tool widget">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3><p><a href="${linkWeb}" target="_blank">online</a><span style="cursor: default"> | </span><a href="${linkLocal}" target="_blank">download</a></p></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}
