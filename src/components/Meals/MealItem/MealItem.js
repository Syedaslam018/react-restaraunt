import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = props => {
    let price = `$${props.price}`
  return (
    <li>
      <div className={classes.meal}>
        <div >
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} item={props}/>
        </div>
        </div>
    </li>
  )
}

export default MealItem
