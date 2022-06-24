import createElement from './elementCreate.js';
import meal from './assets/img/meatballs.jpg';
import salad from './assets/img/salad.jpg';
import dessert from './assets/img/dessert.jpg';

export const menuPage = function() {
    const menuItemCreator = function(itemName, itemSource) {
        const itemTitle = itemName;
        const source = itemSource;
        return {
            itemTitle,
            itemSource
        }
    }
    const foodItems = [menuItemCreator('Meatballs', meal), menuItemCreator('Salad', salad), menuItemCreator('Dessert', dessert)];
    const foodItemsElements = [];
    foodItems.forEach((item) => {
        const itemContainer = createElement('div');
        const itemHeader = createElement('h3', undefined, item.itemTitle);
        const itemImg = new Image();
        itemImg.src = item.itemSource;
        itemContainer.append(itemHeader);
        itemContainer.append(itemImg);
        foodItemsElements.push(itemContainer);
    })
    const container = createElement('div', 'menu-container');
    for (let i = 0; i < foodItemsElements.length; i++) {
        container.append(foodItemsElements[i]);
    };
    return container;
}