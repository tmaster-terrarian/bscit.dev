const __tools = document.getElementById("tools")

function genWeb(imageSrc, link, name, descriptionHtml)
{
    __tools.innerHTML += `
    <div class="tool">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3> <a href="${link}" target="_blank">online</a></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}

function genApp(imageSrc, link, name, descriptionHtml)
{
    __tools.innerHTML += `
    <div class="tool">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3> <a href="${link}" target="_blank">download</a></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}

function genWebApp(imageSrc, linkWeb, linkLocal, name, descriptionHtml)
{
    __tools.innerHTML += `
    <div class="tool">
        <div class="preview">
            <img src="${imageSrc}" width="165">
        </div>
        <div class="info">
            <span><h3 style="max-width: ${name.length}ch; display: inline-block">${name}</h3> <a href="${linkWeb}" target="_blank">online</a><span style="cursor: default"> | </span><a href="${linkLocal}" target="_blank">download</a></span>
            <hr>
            ${descriptionHtml}
        </div>
    </div>`
}
