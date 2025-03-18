import React from 'react'
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import clasees from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)

  const numberOfItemsInCart = cartCtx.items.reduce((currval, item) => {
    return currval+ +item.amount
  }, 0)
  return (
   <button className={clasees.button} onClick={props.onClick}>
    <span className={clasees.icon}><CartIcon /></span>
    <span>Your Cart</span>
    <span className={clasees.badge}>{numberOfItemsInCart}</span>
   </button>
  )
}

export default HeaderCartButton
