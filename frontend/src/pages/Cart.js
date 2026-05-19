import React, { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);
const [paymentMethod, setPaymentMethod] = useState("");
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  if (orderPlaced) {

    return (

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundColor: "#28a745",
          color: "white",
        }}
      >

        <div className="text-center">

          <h1>
            ✅ Order Placed Successfully!
          </h1>

          <h3 className="mt-4">
            Tracking ID: BOOK12345
          </h3>

        </div>

      </div>

    );

  }

  return (

    <div className="container mt-5">

      <h1 className="mb-4">
        🛒 My Cart
      </h1>

      <div className="shadow p-4 rounded mb-4">

        <h4>
          Customer Details
        </h4>

        <p>
          Name: Ankitha
        </p>

        <p>
          Gmail: saiankithapogula@gmail.com
        </p>

        <p>
          Tracking ID: BOOK12345
        </p>

      </div>

      <div className="shadow p-4 rounded mb-4">

        <h4>
          Ordered Books
        </h4>

        {cartItems.length === 0 ? (

          <p>
            No Books Added
          </p>

        ) : (

          <ul>

            {cartItems.map((item, index) => (

              <li key={index}>

                {item.title} - ₹{item.price}

              </li>

            ))}

          </ul>

        )}

        <h5 className="mt-3">

          Total Invoice: ₹{totalPrice}

        </h5>

      </div>

      <div className="shadow p-4 rounded mb-4">

        <h4 className="mb-4">
          Payment Options
        </h4>
<button
  className={`btn me-3 mb-3 ${
    paymentMethod === "UPI"
      ? "btn-dark"
      : "btn-outline-dark"
  }`}
  onClick={() => setPaymentMethod("UPI")}
>
  UPI
</button>

<button
  className={`btn me-3 mb-3 ${
    paymentMethod === "Net Banking"
      ? "btn-primary"
      : "btn-outline-primary"
  }`}
  onClick={() => setPaymentMethod("Net Banking")}
>
  Net Banking
</button>

<button
  className={`btn me-3 mb-3 ${
    paymentMethod === "COD"
      ? "btn-success"
      : "btn-outline-success"
  }`}
  onClick={() => setPaymentMethod("COD")}
>
  Cash On Delivery
</button>

<button
  className={`btn me-3 mb-3 ${
    paymentMethod === "Card"
      ? "btn-danger"
      : "btn-outline-danger"
  }`}
  onClick={() => setPaymentMethod("Card")}
>
  Credit/Debit Card
</button>

        <p className="mt-3">
          Payment Status: Pending
        </p>

        <button
          className="btn btn-success w-100 mt-3"
          onClick={() => setOrderPlaced(true)}
        >
          Place Order
        </button>

      </div>

    </div>

  );

}

export default Cart;