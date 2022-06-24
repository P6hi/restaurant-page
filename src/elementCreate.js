export default function(element, className, content) {
    const el = document.createElement(element);
    if (className) {
        el.classList.add(className);
    }
    if (typeof content === 'string') {
        el.textContent = content;
    }
    return el;
}