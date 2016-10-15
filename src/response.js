export default (function () {
    let html = document.documentElement,
        width = html.clientWidth,
        ratio = width / 320;
    if (ratio > 2) {
        ratio = 2;
        html.style.width = '640px';
        document.body.style.width = '640px';
    }
    html.style.fontSize = 100 * ratio + 'px';
})();