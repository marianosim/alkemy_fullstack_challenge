import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'


function CardContent() {
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
// Expenses calculation
const expenses = activities.filter(activity => activity.type === 'Egreso');
const totalExpenses = expenses.map(expense => expense.amount).reduce((acc, val)=> acc + val, 0);
console.log(totalExpenses);

//Income calculation
const incomings = activities.filter( activity => activity.type === 'Ingreso');
const totalIncome = incomings.map(income => income.amount).reduce((acc, val)=> acc + val, 0);
console.log(totalIncome);

// Total balance
const balance = totalIncome - totalExpenses;

  //Balance card
  let totalBalance = {
    title: 'Balance',
    color: 'alert alert-primary',
    total: balance,
    icon: "fa-solid fa-money-bill-transfer",
  }

  //Income card

  let income = {
    title: 'Ingresos',
    color: 'alert alert-success',
    total: totalIncome,
    icon: "fa-solid fa-arrow-trend-up",
  }
  //Expense card

  let expense = {
    title: 'Egresos',
    color: 'alert alert-danger',
    total: '-' + totalExpenses, 
    icon: "fa-solid fa-arrow-trend-down",
  }

let cardProps = [totalBalance, income, expense]

return (
  <div className="row">
    {cardProps.map((cards, i) => {
      return <Card {...cards} key={i}/>
    })}
  </div>
)
}

export default CardContent;