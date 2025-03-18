import React,{useContext} from 'react'
import classes from './CartItem.module.css'
import CartContext from '../../store/cart-context'

const CartItem = props => {
  let cartCtx = useContext(CartContext)
  let addSameItemToCartHandler = (event) => {
    event.preventDefault();
    // const amount = Number(document.getElementById('amount_'+props.id).value)
    // cartCtx.addItem({...props.item,amount:amount})
    cartCtx.addOneItem(props.id)
  }
  const removeItemFromCart = event => {
    event.preventDefault();
    cartCtx.removeItem(props.id)

  }
  return (
    <li>
      <div className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.amount}>{`x${props.amount}`}</div>
            <div className={classes.container}>
                <button className={classes.add} onClick={addSameItemToCartHandler}>+</button>
                <button className={classes.sub} onClick={removeItemFromCart}>-</button>
            </div>
        </div>
    </li>
  )
}

export default CartItem
