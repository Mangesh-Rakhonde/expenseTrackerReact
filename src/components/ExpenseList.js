import React, { useContext, useEffect } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses, fetchExpenses, deleteExpense, loading, error,expensesUpdated } = useContext(ExpenseContext);

  useEffect(() => {
    fetchExpenses();
    console.log("Expenses fetched", expenses);
  }, [expensesUpdated]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {expenses.length > 0 ? (
        expenses.map(expense => (
          <ExpenseItem key={expense._id} expense={expense} onDelete={()=>deleteExpense(expense._id)} />
        ))
      ) : (
        <p>No expenses found</p>
      )}
    </div>
  );
};

export default ExpenseList;
