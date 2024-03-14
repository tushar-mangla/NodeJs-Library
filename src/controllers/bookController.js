const library = require("../database");
const { errorHandler } = require("../utils/helper")


const addBook = async (req, res) => {
    try {
        const { book } = req.body;
        library.addBook(book);
        res.send('Book added successfully');
    } catch (error) {
        errorHandler(res, error.message);
    }
}

const removeBook = async (req, res) => {
    try {
        const { book } = req.body;
        library.removeBook(book);
        res.send('Book removed successfully');

    } catch (error) {
        errorHandler(res, error.message);
    }
}
const updateBook = async (req, res) => {
    try {
        const { original_book, new_book } = req.body;
        library.updateBook(original_book, new_book);
        res.send('Book name updated successfully');
    } catch (error) {
        errorHandler(res, error.message);
    }
}
const getBookList = async (req, res) => {
    try {
        // res.send(library.getBookList());
        let bookListString = '';
        await library.getBookList(library.books, 0, async (book) => {
            bookListString += book;
        });
        res.send(bookListString);
    } catch (error) {
        errorHandler(res, error.message);
    }
}
const saveToDatabase = async (req, res) => {
    try {
        const responseTimes = await library.saveToDatabase();
        res.json(responseTimes);
    } catch (error) {
        errorHandler(res, error.message);
    }
}


module.exports = {
    addBook,
    removeBook,
    updateBook,
    getBookList,
    saveToDatabase
}