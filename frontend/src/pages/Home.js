import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div
          className="p-5"
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: "15px",
          }}
        >

          <h1 className="display-3 fw-bold text-dark">
            Welcome To BookShoppy
          </h1>

          <p className="lead mt-3">
            Discover The Best Books Online
          </p>

          <div className="mt-4">

            <Link
              to="/register"
              className="btn btn-danger mx-2"
            >
              Register
            </Link>

          </div>

          <p className="mt-4">

            Already have an account?

            <Link to="/login" className="ms-2">
              Click Here To Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Home;