Templates.load("header").then((text) => {
    let e = document.body;
    e.innerHTML = text + e.innerHTML;
});
