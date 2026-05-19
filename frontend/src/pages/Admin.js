import React, { useState } from "react";

function Admin() {

  const [orders, setOrders] = useState([

    {
      id: "ORD101",
      customer: "Ankitha",
      book: "Atomic Habits",
      payment: "UPI",
      status: "Pending",
    },

    {
      id: "ORD102",
      customer: "Rahul",
      book: "Harry Potter",
      payment: "COD",
      status: "Shipped",
    },

  ]);

  const updateStatus = (index, newStatus) => {

    const updatedOrders = [...orders];

    updatedOrders[index].status = newStatus;

    setOrders(updatedOrders);

  };

  return (

    <div className="container mt-5">

      <h1 className="mb-5">
        Admin Dashboard
      </h1>

      <div className="row mb-5">

        <div className="col-md-4">

          <div className="card shadow p-4 text-center">

            <h3>Total Orders</h3>

            <h1>{orders.length}</h1>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4 text-center">

            <h3>Total Books</h3>

            <h1>15</h1>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4 text-center">

            <h3>Payments Done</h3>

            <h1>10</h1>

          </div>

        </div>

      </div>

      <div className="shadow p-4 rounded">

        <h3 className="mb-4">
          Orders List
        </h3>

        <table className="table">

          <thead>

            <tr>

              <th>Order ID</th>

              <th>Customer</th>

              <th>Book</th>

              <th>Payment</th>

              <th>Status</th>

              <th>Update</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order, index) => (

              <tr key={index}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.book}</td>

                <td>{order.payment}</td>

                <td>

                  <span
                    className={`badge ${
                      order.status === "Pending"
                        ? "bg-warning"
                        : order.status === "Shipped"
                        ? "bg-primary"
                        : "bg-success"
                    }`}
                  >

                    {order.status}

                  </span>

                </td>

                <td>

                  <select
                    className="form-select"
                    onChange={(e) =>
                      updateStatus(index, e.target.value)
                    }
                  >

                    <option>
                      Select
                    </option>

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Admin;