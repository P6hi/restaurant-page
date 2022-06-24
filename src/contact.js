import createElement from './elementCreate.js';

export const contactPage = function() {
    const container = createElement('div', 'contact-container');
    const contactHeader = createElement('h2', 'contact-header', 'Contact Information');
    const email = createElement('p', undefined, 'Email: lorem@ipsum.com');
    const address = createElement('p', undefined, 'Address: Mustamäe tee, 50');
    const tele = createElement('p', undefined, '+372 700 7000');
    container.append(contactHeader);
    container.append(email);
    container.append(address);
    container.append(tele);
    return container;
}
