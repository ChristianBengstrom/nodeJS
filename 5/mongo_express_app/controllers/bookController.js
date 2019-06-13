// https://medium.freecodecamp.org/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9

// External Dependancies
const boom = require('boom')   // error utilities

// Get Data Models
const Book = require('../models/Book')

// Get all books
exports.getBooks = async (req, reply) => {
  try {
    const books = await Book.find()
    return books
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = await Book.findById(id)
    return book
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new book
exports.addBook = async (req, reply) => {
  try {
    const book = new Book(req.body)
    return book.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing book
exports.updateBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = req.body
    const { ...updateData } = book
    const update = await Book.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a book
exports.deleteBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = await Book.findByIdAndRemove(id)
    return book
  } catch (err) {
    throw boom.boomify(err)
  }
}
