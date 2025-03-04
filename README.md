# User Authentication System with JWT

## 📌 Overview
This is a **User Authentication System** built using **Node.js, Express, and MongoDB**. It includes features such as user registration, login, password reset, and JWT-based authentication.

## 🚀 Features
- User Registration with input validation
- User Login with JWT Authentication
- Password Reset with additional security
- Secure password hashing using **bcryptjs**
- Proper error handling and input validation

---

## 🛠️ Technologies Used
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - Database for storing user details
- **Mongoose** - MongoDB object modeling tool
- **JWT (jsonwebtoken)** - For authentication
- **bcryptjs** - For hashing passwords
- **dotenv** - For managing environment variables
- **Postman** - For API testing

---

## 📂 Folder Structure
```
📦 user-authentication-system
 ┣ 📂 database
 ┃ ┗ 📜 db.js           # Database connection
 ┣ 📂 routes
 ┃ ┗ 📜 userRoutes.js   # User authentication routes
 ┣ 📂 controller
 ┃ ┗ 📜 userController.js # Authentication logic
 ┣ 📂 models
 ┃ ┗ 📜 User.js         # User schema
 ┣ 📜 .env.example     # Sample environment variables
 ┣ 📜 .gitignore       # Git ignore file
 ┣ 📜 package.json     # Project dependencies
 ┣ 📜 README.md        # Documentation
 ┣ 📜 index.js        # Main server file
```

---

## 🔧 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/user-authentication-system.git
cd user-authentication-system
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
npm start / node index.js / nodemon
```
The server will run on `http://localhost:3000`

---

## 🔄 API Endpoints
### 1️⃣ User Registration
**POST** `/auth/register`
```json
{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "securePassword123",
  "phone": "1234567890",
  "address": "123 Main Street"
}
```

### 2️⃣ User Login
**POST** `/auth/login`
```json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

### 3️⃣ Reset Password
**POST** `/auth/resetpassword`
```json
{
  "email": "johndoe@example.com",
  "newPassword": "securePassword123",
  "phone": "1234567890",
  "address": "123 Main Street",
  "securityAnswer": "Your answer, such as Cricket, Tennis, or any favorite character etc." 
}
```


## ✨ Author
Developed by Mohd Adnan

---

