import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';


export default function AddTransaction() {

  
  const [ title , setTitle ] = useState('');
  const [ amount , setAmount ] = useState('');

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  }


  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e =>{
    e.preventDefault();
    
  const newTransaction ={
    id : Math.floor(Math.random() * 100000000),
    title,
    amount:+amount
  }
  addTransaction(newTransaction);
  setTitle('');
  setAmount('');
  }

  return (
    <>
    <h3>Add New Project Details </h3>
    <form id="form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Project Title</label>
        <input
          type="text" 
          value={title} 
          onChange={handleChange(setTitle)}  
          placeholder="Enter Project Name..." 
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Total Amount <br />
          </label
        >
        <input
          type="tel"
          value={amount} 
          onChange={handleChange(setAmount)} 
          placeholder="Enter Profit/Loss Amount..." 
          required
        />
          
      </div>
      <button className="btn">Add To Business Revenue</button>
    </form>
    </>
  )
}