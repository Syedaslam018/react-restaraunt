import React, {useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = props => {
  const cartCtx = useContext(CartContext)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((meal) => (
        // <li>{item.name} {item.description} {item.price}</li>
        <CartItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        amount={meal.amount}
      />
      ))}
    </ul>
  );
  const totalAmount = cartCtx.items.reduce((acc,item) =>  acc + item.price*item.amount,0)
  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
