import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">ℹ️ About Expense Tracker</h2>
      
      <p className="lead text-center">
        The Expense Tracker app helps you manage your finances efficiently by tracking your income and expenses in real time.
      </p>

      {/* App Purpose Section */}
      <div className="card p-4 shadow-sm mt-4">
        <h4>🎯 Our Goal</h4>
        <p>
          We aim to provide a simple yet powerful tool to help users gain control over their financial habits.
          With real-time tracking, budgeting insights, and detailed reports, you can make informed decisions about your spending.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="card p-4 shadow-sm mt-4">
        <h4>🚀 Key Features</h4>
        <ul className="list-group">
          <li className="list-group-item">📊 Track daily expenses and income</li>
          <li className="list-group-item">💰 Set and monitor budget goals</li>
          <li className="list-group-item">📅 View monthly spending reports</li>
          <li className="list-group-item">🔒 Secure and easy-to-use interface</li>
          <li className="list-group-item">📂 Categorize expenses for better insights</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="card p-4 shadow-sm mt-4">
        <h4>💡 Why Choose Expense Tracker?</h4>
        <p>
          Unlike other financial management apps, we prioritize **simplicity, security, and insightful analytics** to help users take charge of their financial health with ease.
        </p>
      </div>
      
      <p className="text-center mt-4">📩 Have questions? <a href="mailto:support@expensetracker.com">Contact us</a></p>
    </div>
  );
};

export default About;
