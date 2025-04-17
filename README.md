# 📚 ShelfTalk – Book Review Platform

A full-stack web application that allows users to browse books, read and write reviews, and rate books. Built with a **React** frontend and a **Node.js + Express** backend connected to **MongoDB**.

---

## 🚀 Features

### ✅ Frontend (React + TailwindCSS)

- Responsive, mobile-friendly UI
- Home page showcasing all books
- Book detail page with:
  - Full book information
  - List of reviews
  - Review submission form
- User authentication (register, login)
- Profile page for viewing user info
- Protected routes (based on login state)
- State management using React hooks
- Routing via `react-router-dom`
- Error and loading state handling

---

### 🛠️ Backend (Node.js + Express + MongoDB)

- RESTful API with the following endpoints:
  - `GET /books` – Retrieve all books (with pagination planned)
  - `GET /books/:id` – Retrieve specific book details
  - `POST /books` – Add new book (admin only)
  - `GET /reviews` – Retrieve reviews for a book
  - `POST /reviews` – Submit a new review
  - `POST /auth/register` – Register new user
  - `POST /auth/login` – Login and get token
  - `GET /users/:id` – Get user profile
  - `PUT /users/:id` – Update user profile
- JWT-based authentication and authorization
- Admin-only book creation
- Input validation and error handling
- Secure password hashing with bcrypt
- MongoDB for data persistence (using Mongoose)

---

## ⚙️ Setup Instructions

### 🔧 Backend

1. Go to the `backend/` directory:

   ```bash
   cd backend
   npm install
   ```

2. Create a .env file

   ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

---

### 💻 Frontend

Go to the frontend/ directory:

```bash
cd frontend
```

Install dependencies:

```bash

npm install
```

Start the React development server:

```bash

npm run dev
```

---

### 🔐 Authentication

- JWT is stored in localStorage after login. (TBD)
- Protected routes check for token presence.

- Admin access is granted via a flag in the user model (isAdmin: true).

---

### ✅ Completed Requirements (as per assignment)

- React + Express + MongoDB stack

- RESTful API design

- Full CRUD operations

- Token-based login and protected actions

- Clean and modern responsive UI

- State handled using React hooks

- Modular, scalable folder structure

- Clear documentation

---

### 📌 Future Improvements

- Pagination and filters on book list

- Review editing/deleting

- Admin dashboard

- Deployment (Netlify + Render)

- Unit testing & validation with express-validator or Zod

---

### 📎 Submission

- ✅ Code pushed to GitHub
- ✅ README with setup instructions
- Deployment pending
