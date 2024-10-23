const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes for CRUD operations
router.get('/', bookController.getBooks);                   // List all books
router.get('/:id', bookController.getBookById);             // Get book by ID
router.post('/', bookController.createBook);                // Create a new book
router.post('/update/:id', bookController.updateBook);      // Update a book
router.post('/delete/:id', bookController.deleteBook);      // Delete a book

module.exports = router;
