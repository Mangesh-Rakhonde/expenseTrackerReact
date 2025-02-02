import React, { useContext, useState } from 'react';

import { ExpenseContext} from '../context/ExpenseContext'
const ExpenseForm = () => {
  const {addExpense}=useContext(ExpenseContext)
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState('');
  
  const [note, setNote] = useState('');
  const handleChange = (event) => {
    setCategory(event.target.value); // Update the selected value
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      date,
      title,
      category,
      amount,
      note
    });
    
    setDate('');
    setTitle('');
    setCategory('');
    setNote('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label className="form-label">Title</label>
        <input 
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">Amount</label>
        <input 
        className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">Category</label>
        <select className="form-select" value={category} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">Date</label>
        <input 
        className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">Note</label>
        <input 
          className="form-control"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
