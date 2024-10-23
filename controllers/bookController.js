const Book = require('../models/bookModel');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('index', { books });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render('index', { books: [book] });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    const newBook = new Book({ title, author, pages });
    await newBook.save();
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, author, pages });
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
