import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

      if (response.data.user.role === "admin") {

        navigate("/admin");

      } else {

        navigate("/books");

      }

    } catch (error) {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="container mt-5">

      <div className="col-md-6 mx-auto shadow p-5 rounded">

        <h2 className="mb-4 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-dark w-100"
          onClick={loginUser}
        >
          Login
        </button>

        <p className="mt-4 text-center">

          Don't have an account?

          <Link to="/register" className="ms-2">
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;