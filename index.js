import { menuArray } from './data.js'
const menuSection = document.getElementById('menu-section')

function renderMenu(){

    const menuHtml = menuArray.map(menuObj =>
             `<div class="menu-item">
                    <img class="meal-emoji" src="https://emojicdn.elk.sh/${menuObj.emoji}" alt="${menuObj.name} emoji">
                    <div class="meal-details">
                        <h2 class="meal-name">${menuObj.name}</h2>
                        <p class="meal-ingredients">${menuObj.ingredients.join(', ')}</p>
                        <p class="meal-price">$${menuObj.price}</p>
                    </div>
                    <button class="add-to-cart-btn" data-added="${menuObj.id}">+</button>
                </div> `
    ).join('')

    menuSection.innerHTML = menuHtml
}

renderMenu()


function handleButtonsClick(){}

function renderCart(){}