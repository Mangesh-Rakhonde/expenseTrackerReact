import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import { ExpenseProvider } from '../context/ExpenseContext';
const DashboardScreen = () => {
  return (
    <div style={styles.container}>
      <h1>Expense Tracker</h1>
      <ExpenseProvider>
      <ExpenseForm />
      <ExpenseList />
      </ExpenseProvider>
     
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  }
};

export default DashboardScreen;
