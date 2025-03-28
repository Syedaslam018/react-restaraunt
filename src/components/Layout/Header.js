import { Fragment } from "react"
import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onClick}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="delicious food on the table"/>
      </div>
    </Fragment>
  )
}

export default Header
