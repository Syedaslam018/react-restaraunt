import React from 'react'
import classes from './CartItem.module.css'
const CartItem = props => {
    let price = `$${props.price}`
    console.log(props)
  return (
    <li>
      <div className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div className={classes.amount}>{`Amount:${props.amount}`}</div>
        </div>
    </li>
  )
}

export default CartItem
