import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">

        <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">
          BooksHoppy
        </Link>

        <div className="ms-auto">

          <Link className="nav-link d-inline text-white mx-3" to="/">
            Home
          </Link>

          <Link className="nav-link d-inline text-white mx-3" to="/books">
            Books
          </Link>

          <Link className="nav-link d-inline text-white mx-3" to="/cart">
            🛒 Cart
          </Link>

          {!user && (

            <Link
              className="nav-link d-inline text-white mx-3"
              to="/login"
            >
              Login
            </Link>

          )}

          {user?.role === "admin" && (

            <Link
              className="nav-link d-inline text-warning mx-3"
              to="/admin"
            >
              Admin Dashboard
            </Link>

          )}

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/books" element={<Books />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;