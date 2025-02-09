# Workout Tracker

## Introduction
Workout Tracker is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to track their workouts. Users can sign up, log in, and manage their workouts, including creating, reading, updating, and deleting workout records. Authentication is handled via JWT tokens, ensuring secure access to user data.

## Features
- **User Authentication**: Secure signup & login with JSON Web Tokens (JWT), ensuring protected access to user accounts.
- **Workout Management**: Users can create, read, update, and delete workouts with details like title, load, and reps.
- **Authorization Middleware**: API routes are protected with JWT-based authentication to restrict unauthorized access.
- **Context API for State Management**: Utilizes React Context API to manage authentication and workout states efficiently.
- **User Session Management**: Keeps users logged in using JWT stored in local storage for seamless session handling.
- **Dynamic UI**: Interactive forms for adding and managing workouts, ensuring a smooth user experience.
- **Responsive Design**: Fully responsive interface for use on mobile and desktop devices.
- **Navigation System**: Includes a navigation bar for easy access to login, signup, and workout management pages.
- **Backend with Express & MongoDB**: RESTful API built using Express and Mongoose for handling user authentication and workout management.
- **Error Handling**: Proper error responses for invalid authentication, missing fields, and other validation checks.

## Technologies Used
- **Frontend:** React, Context API, Hooks
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose for ODM)
- **Authentication:** JSON Web Tokens (JWT)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone https://github.com/your-username/workout-tracker.git
cd workout-tracker
```

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend folder and add the following:
   ```env
   SECRETKEY=your_secret_key
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

The frontend should be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Once you have succssfully installed all the files and the required dependencies, and you start the frontend and the backed, on the browser you will see this on your screen.
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/youmustbeloggedin.png" width="500">

## Then if you navigate to the login page you should see something like this:
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/loginpage.png" width="500">
- It will not let you continue unless you make an account and signup, to do that you will have to go to the signup page.

## On the signup page you should see something like this:
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/signuppage.png" width="500">

## Upon successfull signup you will be greeted by the homepage, where you can add and remov workouts. On the top right corner you should see your email which you used to signup.
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/homepage.png" width="500">

## If you do ```sh npm start ``` in your terminal, in the frontend folder, and it executes successfully, you should see output something like this:
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/frontendterminaloutput.png" width="500">
- Ignore the deprecated warnings. They are not fatal or breaking.

## If you do ```sh npm start ``` in your terminal, in the backend folder, and it executes successfully, you should see output something like this:
<img src="https://github.com/roshaanmehar/Workout-Calculator/blob/main/backendterminaloutput.png" width="500">
- Requests like these ```sh /api/user/login POST ```, ```sh /api/user/signup POST ```. ```sh /api/workouts GET ```, ```sh /api/workouts POST ``` are normal. 


## API Endpoints
### User Authentication
| Method | Endpoint         | Description      |
|--------|----------------|----------------|
| POST   | /api/user/login | Log in a user  |
| POST   | /api/user/signup | Register a user |

### Workout API (Requires Authentication)
| Method | Endpoint         | Description      |
|--------|----------------|----------------|
| GET    | /api/workouts   | Get all workouts |
| GET    | /api/workouts/:id | Get a specific workout |
| POST   | /api/workouts   | Create a new workout |
| PATCH  | /api/workouts/:id | Update a workout |
| DELETE | /api/workouts/:id | Delete a workout |

## How to Use
1. **Sign Up/Login**: Create an account or log in to access workout tracking features.
2. **Add Workouts**: Use the workout form to add details like title, load, and reps.
3. **Manage Workouts**: Edit or delete existing workouts.
4. **Stay Logged In**: Your session remains active using JWT stored in local storage.

## Folder Structure
```
workout-tracker/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── .env
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   ├── .env
│   └── index.js
└── README.md
```

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or support, open an issue or reach out at [roshaanalimeher@gmail.com].

