Templates.load("footer").then((text) => {
    let e = document.body;
    e.innerHTML += text;
});
