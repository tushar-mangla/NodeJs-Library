const express = require('express');
const { addBook, removeBook, updateBook, getBookList, saveToDatabase } = require('../controllers/bookController');
const libraryRoutes = express.Router();


libraryRoutes.post("/add-book", addBook);


libraryRoutes.delete("/remove-book", removeBook);


libraryRoutes.patch("/update-book", updateBook);


libraryRoutes.get("/get-book-list", getBookList);


libraryRoutes.put("/save-to-database", saveToDatabase);



module.exports = libraryRoutes