import createElement from './elementCreate.js';

export const homePage = function() {
    const description = 'Põhjamaa Köök is a restaurant specialising in the cuisine of Northern Europe. We use the freshest ingredients gathered from the Nordic region. Salmon from Norway, mushrooms from Sweden, meat from Finland, and berries from Estonia.';
    const container = createElement('div', 'home-container');
    const homeHeader = createElement('h2', 'home-header', 'Põhjamaa Köök');
    const homeText = createElement('p', 'home-text', description);
    container.append(homeHeader);
    container.append(homeText);
    return container;
}