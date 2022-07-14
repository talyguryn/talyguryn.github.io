function createSvgElement(tag, attrs = {}) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag);

    Object.keys(attrs).forEach(key => {
        element.setAttribute(key, attrs[key]);
    });

    board.appendChild(element);

    return element;
}
