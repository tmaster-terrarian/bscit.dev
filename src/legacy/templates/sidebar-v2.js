import * as gen from "../js/site-tree-gen.js";

Templates.load("sidebar-v2").then((text) => {
    let e = Array.from(document.getElementsByTagName("main"))[0];
    e.innerHTML = text
        .replace("{REPLACE-0}", gen.generate([
            gen.directory("ignorethis/", [
                gen.file("beebo-b665e3d/")
            ]),
            gen.file("index/"),
            gen.file("snippets.html"),
            gen.file("tools/"),
            gen.file("works/")
        ]))
        .replaceAll("{REPLACE-EXTLINK-ICON}", `<img width="15" height="15" class="ext" src="/legacy/images/material_icons-open_in_new.svg">`)
    + e.innerHTML;
});
