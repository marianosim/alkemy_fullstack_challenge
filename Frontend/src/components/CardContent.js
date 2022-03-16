import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'


function CardContent() {
  //! ingresar por props products, users y categorías
  const [activities, setActivities] = useState([])

  const getActivities = async () => {
    //Fetches data from backend API
   await fetch('http://localhost:3001/api/activities')
    .then((response) => response.json())
    .then((activities) => setActivities(activities.data))
}
useEffect(() => {
    getActivities()
},[])
// Cálculo de gastos
const expenses = activities.filter(activity => activity.type === 'Egreso');
const totalExpenses = expenses.map(expense => expense.amount).reduce((acc, val)=> acc + val, 0);
console.log(totalExpenses);

//Cálculo de ingresos
const incomings = activities.filter( activity => activity.type === 'Ingreso');
const totalIncome = incomings.map(income => income.amount).reduce((acc, val)=> acc + val, 0);
console.log(totalIncome);

// Balance total
const balance = totalIncome - totalExpenses;

  /* <!-- Total productos --> */
  let totalBalance = {
    title: 'Balance',
    color: 'primary',
    total: balance,
    icon: "fa-solid fa-money-bill-transfer",
  }

  /* <!-- Total usuarios --> */

  let income = {
    title: 'Ingresos',
    color: 'success',
    total: totalIncome,
    icon: "fa-solid fa-arrow-trend-up",
  }
  /* <!-- Total categorías --> */

  let expense = {
    title: 'Egresos',
    color: 'warning',
    total: '-' + totalExpenses, 
    icon: "fa-solid fa-arrow-trend-down",
  }

let cartProps = [totalBalance, income, expense]

return (
  <div className="row">
    {cartProps.map((carts, i) => {
      return <Card {...carts} key={i} />
    })}
  </div>
)
}

export default CardContent;