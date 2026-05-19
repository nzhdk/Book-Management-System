import React from "react";
import { Link } from "react-router-dom";

function Register() {

  return (

    <div className="container mt-5">

      <div className="col-md-6 mx-auto shadow p-5 rounded">

        <h2 className="mb-4 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="form-control mb-3"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
        />

        <button className="btn btn-danger w-100">
          Register
        </button>

        <p className="mt-4 text-center">

          Already have an account?

          <Link to="/login" className="ms-2">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;