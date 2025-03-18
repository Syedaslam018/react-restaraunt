import React, {useState} from 'react'
import CartContext from './cart-context'

const CartProvider = props => {
  const [cartItems,setCartItems] = useState([])
    const addItemToCartHandler = newItem => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Update the existing item's amount
        return prevCartItems.map((item) =>
          item.id === newItem.id ? { ...item, amount: item.amount + newItem.amount } : item
        );
      } else {
        // Add new item to the cart
        return [...prevCartItems, newItem];
      }
      })
    }
    const removeItemFromCartHandler = id => {
      setCartItems((prevCartItems) =>
        prevCartItems
          .map((item) =>
            item.id === id ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0) // Remove if amount is 0
      );
    }
    const addSameItemToCartHandler = id => {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    }
    const cartContext = {
        items:cartItems,
        totalAmount:0,
        addItem:addItemToCartHandler,
        addOneItem:addSameItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
