# Personal Budget Tracker

A web application to track your personal finances.

## Features

- User authentication (register, login, logout)
- Dashboard with financial overview
- Add, edit, delete income and expense transactions
- Categorize transactions
- Set and track budget goals
- Generate financial reports with graphs
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Version Control: Git, GitHub

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/justrashad/personal-budget-tracker.git
   cd personal-budget-tracker/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following content:
   ```dotenv
   MONGO_URI=mongodb://yourUsername:yourPassword@localhost:27017/personalBudgetTracker
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

## Usage

1. Register a new account.
2. Login to your account.
3. Add income and expense transactions.
4. Set and track budget goals.
5. View reports and analyze your spending patterns.

## Deployment

### Backend Deployment

1. Deploy the backend to a cloud service like Heroku, DigitalOcean, or any other.
2. Make sure to set the environment variables in the cloud service environment.

### Frontend Deployment

1. Deploy the frontend to a static hosting service like Netlify, Vercel, or GitHub Pages.
2. Update the `proxy` setting in `client/package.json` if needed.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
