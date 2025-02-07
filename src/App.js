import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import {ExpenseProvider} from './context/ExpenseContext';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Insights from './screens/Insights';

const App = () => {
  return (
    <AuthProvider>
      <ExpenseProvider>  {/* Provider for Expenses */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardScreen /></ProtectedRoute>} />
            <Route path="/insights" element={<ProtectedRoute><Insights /></ProtectedRoute>} />
            <Route path="*" element={<NoPage />} />
          </Route>
          
        </Routes>
      </Router>
      </ExpenseProvider> {/* Provider for Expenses */}
    </AuthProvider>
  );
};

export default App;
