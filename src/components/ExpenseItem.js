import React from 'react';

const ExpenseItem = ({ expense, onDelete }) =>{


  return(
  
    <div className="container mt-3">
    
    <div className="card">
      <div className="card-body">
        <p>Name: {expense.title}</p>
        <p>Price: {expense.amount} Rs</p>
        <p>Category: {expense.category} </p>
        <p>Date: {new Date(expense.date).toISOString().split("T")[0]
  }</p>
     
      
     <button onClick={() => onDelete(expense._id)}>Delete</button>
     
      </div>
      
    </div>
  </div>
    
  );
  
} 



export default ExpenseItem;
