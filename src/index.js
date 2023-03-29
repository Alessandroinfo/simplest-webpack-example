function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack!';
    return element;
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(component());
});
