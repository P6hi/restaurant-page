import createElement from './elementCreate.js';

export const mainPage = function() {
    const main = createElement('main');
    const linkItems = ['Home', 'Menu', 'Contact'];
    const header = createElement('header');
    const companyName = createElement('h1', 'company-name', 'Põhjamaa Köök');
    const linkList = createElement('ul', 'list');
    const copyright = createElement('small', undefined, '© Põhjamaa Köök');
    for (let i = 0; i < linkItems.length; i++) {
        const link = createElement('li');
        const anchor = createElement('a', undefined, linkItems[i]);
        link.append(anchor);
        linkList.append(link);
    }
    const footer = createElement('footer');
    header.append(companyName);
    header.append(linkList);
    footer.append(copyright);
    document.body.append(header);
    document.body.append(main);
    document.body.append(footer);
    return main;
}