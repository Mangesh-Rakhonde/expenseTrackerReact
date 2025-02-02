import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => (
  <div className="container mt-3">
  
  <div className="card">
    <div className="card-body">
    <p>{expense.title}</p>
    <p>{expense.amount}</p>
    <button onClick={() => onDelete(expense._id)}>Delete</button>

    </div>
  </div>
</div>
  
);




export default ExpenseItem;
