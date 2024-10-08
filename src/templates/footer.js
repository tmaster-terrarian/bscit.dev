Templates.load("footer").then((text) => {
    let e = document.body;
    e.innerHTML += text.replaceAll("<a href", '<a class="no-underline" target="_blank" href');
});
