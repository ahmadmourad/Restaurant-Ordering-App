import { menuArray } from './data.js'
import { cartArr } from './data.js'

const menuSection = document.getElementById('menu-section')
const cartList = document.getElementById('cart-list')

renderMenu()


function renderMenu() {

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


document.addEventListener('click', handleButtonsClick)


function handleButtonsClick(e) {
    if (e.target.dataset.added) {
        cartArr.push(menuArray.filter(menuItem => menuItem.id == e.target.dataset.added)[0])
        renderCart()
    }
    if (e.target.dataset.remove) {
        // console.log("Before removing", cartArr)
        // console.log("selected data attribute", e.target.dataset.remove)
        const removedIndex = cartArr.findIndex((currentItem, index) => index == e.target.dataset.remove)
        // console.log("removed index value", removedIndex)
        cartArr.splice(removedIndex, 1)
        // console.log("After removing", cartArr)
        // console.log(cartArr)
        renderCart()
    }
}


function renderCart() {
    if (cartArr.length > 0) {

        const cartListHtml = cartArr.map((cartItem, index) =>
            `<li class="cart-item">${cartItem.name} 
            <button class="remove-item-btn" data-remove="${index}">remove</button>
            <span class="cart-prices">$${cartItem.price}</span>
            </li>`
        ).join('')

        const totalPrice = cartArr.reduce((total, currentAddedItem) => total + currentAddedItem.price, 0)

        cartList.innerHTML = `${cartListHtml}  
                              <hr>
                              <p class="total-price">Total price 
                              <span class="cart-prices">$${totalPrice}</span>
                              </p>`

        // if (!cartList.parentElement.checkVisibility()) {
        // if (window.getComputedStyle(cartList.parentElement, null).display == 'none') {
        if (cartList.parentElement.style.display === '') {

            cartList.parentElement.style.display = 'flex';
        }
        
    }
    else {
        cartList.parentElement.style.display = 'none'
    }
}