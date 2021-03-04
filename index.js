const express = require('express')
// const MongoClient = require('mongodb').MongoClient
// const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())

app.post('/books', (req, res) => {
    // input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImage = req.body.image

    // key: value
    let newBooks = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        image: newImage
    }
    let BookID = 0

    // process
    // const result = await booksCollection.insertOne(newBooks)
    // booksID = result.insertedId
    

    // output
   //  res.status(201).json(BookID)
})

const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`))