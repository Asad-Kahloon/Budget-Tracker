import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext); 
  const amounts = transactions.map(transaction=>transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);



  return (
    <div className="inc-exp-container">
    <div className='budget'>
      <p><h4>Profit</h4></p>
      <p className="money plus">${income}</p>
    </div>
    <div className='budget'>
      <p><h4>Loss</h4></p>
      <p className="money minus">${expense}</p>
    </div>
  </div>
  )
}
