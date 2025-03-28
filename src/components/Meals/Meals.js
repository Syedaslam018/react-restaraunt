import React from 'react'
import { Fragment } from 'react'
import MealsSummary from './MealSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
  <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>
  )
}

export default Meals
