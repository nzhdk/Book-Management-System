import React, { useState, useContext } from "react";

import { CartContext } from "../context/CartContext";

function Books() {

  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const books = [

    {
      title: "Atomic Habits",
      category: "Motivational",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    },

    {
      title: "Rich Dad Poor Dad",
      category: "Finance",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    },

    {
      title: "Harry Potter",
      category: "Fantasy",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },

    {
      title: "Horror Night",
      category: "Horror",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },

    {
      title: "Mindset",
      category: "Self Help",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    },

    {
      title: "Ikigai",
      category: "Motivational",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    },

  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Featured Books
      </h1>

      <input
        type="text"
        placeholder="Search Books..."
        className="form-control mb-5"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">

        {filteredBooks.map((book, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="card shadow border-0 h-100">

              <img
                src={book.image}
                className="card-img-top"
                alt="book"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <h4>{book.title}</h4>

                <p>
                  Category: {book.category}
                </p>

                <p>
                  Price: ₹{book.price}
                </p>

                <p>
                  ⭐⭐⭐⭐⭐
                </p>

                <button
                  className="btn btn-dark w-100"
                  onClick={() => addToCart(book)}
                >
                  Add To Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Books;