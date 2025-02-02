import React, { createContext, useState } from 'react';
import apiClient from '../apiClient';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [expensesUpdated, setExpensesUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/api/expenses');
      setExpenses(response.data);
    } catch (err) {
      setError('Failed to fetch expenses');
    } finally {
      setLoading(false);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await apiClient.post('/api/expenses', expense);
      setExpenses([...expenses, response.data.expense]);
      console.log(expenses);
      console.log(response.data.expense);
      setExpensesUpdated(!expensesUpdated); // Toggle the state to trigger re-fetch

    } catch (err) {
      setError('Failed to add expense');
    }
  };

  const deleteExpense = async (id) => {
    try {
      await apiClient.delete(`/api/expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense._id !== id));
      setExpensesUpdated(!expensesUpdated); // Toggle the state to trigger re-fetch

    } catch (err) {
      setError('Failed to delete expense');
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, fetchExpenses, addExpense, deleteExpense, loading, error }}>
      {children}
    </ExpenseContext.Provider>
  );
};
