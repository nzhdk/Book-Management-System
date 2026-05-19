const Book = require("../models/Book");

const createBook = async (req, res) => {

    try {

        const book = await Book.create(req.body);

        res.status(201).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

const getBooks = async (req, res) => {

    try {

        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

const updateBook = async (req, res) => {

    try {

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedBook);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

const deleteBook = async (req, res) => {

    try {

        await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Book Deleted Successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

module.exports = {
    createBook,
    getBooks,
    updateBook,
    deleteBook,
};