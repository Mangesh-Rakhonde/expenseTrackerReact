import React, { useContext,useEffect} from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

// Colors for categories
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EF0"];

const ExpenseCategoryChart = () => {
    const { expenses, fetchExpenses, loading, error,expensesUpdated } = useContext(ExpenseContext);
      
    useEffect(() => {
        fetchExpenses();
        
      },[expensesUpdated]);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;     
    const categories = [];
    let totalAmount=0;
    expenses.forEach((expense) => {
    const existingCategory = categories.find(c => c.category === expense.category);

    if (existingCategory) {
        existingCategory.amount += expense.amount;
    } else {
        categories.push({ category: expense.category, amount: expense.amount });
    }
    totalAmount+=expense.amount;
    });
  return (
    <div style={{ width: "80%", height:500 }}className="container mt-5 mb-5 pt-3 pb-3 border">
      <h4>Expenses by Category</h4>
      <p>Total expenses: {totalAmount} Rs</p>
      <ResponsiveContainer width="100%" height="100%">
        
        <PieChart>
          <Pie
            data={categories}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {categories.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseCategoryChart;
