# Expense Tracking App

## Overview
The **Expense Tracking App** helps users efficiently track their daily expenses. Users can log their expenses, categorize them, and view reports to manage their finances better.

## Features
- User authentication (Login/Register)
- Add, edit, and delete expenses
- Categorize expenses
- View expense history
- Dashboard with insights
- Mobile-responsive UI

## Technology Stack
### Frontend:
- React.js
- React Router
- Bootstrap / Tailwind CSS

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose

### Authentication & Security:
- JWT Authentication
- bcrypt for password hashing
- Cookies for session management

### Hosting & Deployment:
- **Frontend:** Vercel / Netlify
- **Backend:** AWS Lambda / Heroku
- **Database:** MongoDB Atlas

## Project Structure
```
expense-tracker-app/
│── backend/
│   │── models/        # Mongoose models
│   │── routes/        # API routes
│   │── controllers/   # Business logic
│   │── server.js      # Express server setup
│
│── frontend/
│   │── src/
│   │   │── components/    # Reusable components
│   │   │── pages/         # Screens like Login, Dashboard, etc.
│   │   │── context/       # Global state management
│   │   │── App.js         # Main app component
│   │── public/            # Static assets
│
│── .env                 # Environment variables
│── package.json         # Dependencies
│── README.md            # Project documentation
```

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (`v16+`)
- **MongoDB** (Local or Atlas)

### Backend Setup
1. **Navigate to the backend folder**
   ```sh
   cd backend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Setup environment variables**
   - Create a `.env` file and add:
   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```
4. **Start the server**
   ```sh
   npm start
   ```

### Frontend Setup
1. **Navigate to frontend**
   ```sh
   cd frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start React App**
   ```sh
   npm start
   ```

## API Documentation
| Method | Endpoint            | Description          | Auth Required |
|--------|----------------|---------------------|--------------|
| POST   | `/api/auth/login`   | User login           | ❌ |
| POST   | `/api/auth/register`| User registration    | ❌ |
| GET    | `/api/expenses`     | Fetch user expenses  | ✅ |
| POST   | `/api/expenses`     | Add new expense      | ✅ |
| DELETE | `/api/expenses/:id` | Delete an expense    | ✅ |

## How to Use
### User Flow
1. **Register/Login**
2. **Add an expense**
3. **View all expenses**
4. **Edit/Delete expenses**
5. **Logout securely**

## Screenshots
(Include UI images here)

## Future Enhancements
- Export expenses as CSV
- Monthly budget tracking
- AI-based spending insights

## Contributing
To contribute:
```sh
# Fork the repository
git clone https://github.com/your-username/expense-tracker.git
```

## License
This project is licensed under the MIT License.

