import React, { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ filterDate }) => {

  const { expenses, fetchExpenses, deleteExpense, loading, error,expensesUpdated } = useContext(ExpenseContext);
  
  useEffect(() => {
    fetchExpenses();
    console.log("Expenses fetched", expenses);
  }, [expensesUpdated]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

   // Filter expenses based on selected date
   let filteredExpenses=[...expenses];
   if(filterDate.length>0){
     filteredExpenses = expenses.filter(
      (expense) => expense.date.split("T")[0] === filterDate
    );
   }
   let totalAmount=0;
   filteredExpenses.forEach(expense=>{
      totalAmount = totalAmount+expense.amount;
   });

  return (
    <div>
      <p>Total expenses cost: {totalAmount} Rs.</p>
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map(expense => (
          <ExpenseItem key={expense._id} expense={expense} onDelete={()=>deleteExpense(expense._id)} />
        ))
      ) : (
        <p>No expenses found</p>
      )}
    </div>
  );
};

export default ExpenseList;
