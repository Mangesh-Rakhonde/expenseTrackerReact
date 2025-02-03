import React ,{useState} from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import { ExpenseProvider } from '../context/ExpenseContext';
const DashboardScreen = () => {
  
  const [filDate, setFilDate] = useState("");
  
  return (
    <div style={styles.container}>
      
      <ExpenseProvider>
        <h4>Expense Tracker</h4>
      <ExpenseForm />
      <div className='container pt-3 pb-3 border'>
      <h4>List of expenses.</h4>
      <span>Filter based on date: </span>
      <input type="date" value={filDate} onChange={(e) => setFilDate(e.target.value)}/>
      <ExpenseList filterDate={filDate} />
      </div>
     
      </ExpenseProvider>
     
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default DashboardScreen;
