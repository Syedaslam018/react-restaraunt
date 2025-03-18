import React, {useContext} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'


const MealItemForm = props => {
  let cartCtx = useContext(CartContext)
  let addItemToCartHandler = (event) => {
    event.preventDefault();
    const amount = Number(document.getElementById('amount_'+props.id).value)
    cartCtx.addItem({...props.item,amount:amount})
  }
  return (
    <form className={classes.form}>
      <Input label="amount" input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button onClick={addItemToCartHandler}>+ Add</button>
    </form>
  )
}

export default MealItemForm
