const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },

    ISBN: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    imageURL: {
        type: String,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Book", bookSchema);