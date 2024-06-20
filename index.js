function msg(content) {
    var element = document.querySelector('p[role="alert"]');
    if (element) {
        element.innerHTML = content;
        element.style.backgroundColor = '#e6f4ea';
        element.style.color = '#2e8540';
        element.style.border = '1px solid #c2e4c1';
        element.style.padding = '10px';
        element.style.borderRadius = '4px';
        element.style.fontSize = '14px';
        element.style.margin = '10px 0';
        element.style.transition = 'opacity 0.5s';

        setTimeout(() => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.innerHTML = "";
                element.style.opacity = '1';
            }, 500);
        }, 9000);
    }
}
function copy(text){
navigator.clipboard.writeText(text)
}
module.exports = uniquetechforblind