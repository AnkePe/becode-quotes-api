const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    quote : String,
    author : String,
    // image : String
})


module.exports = mongoose.model ("Quote", quoteSchema)

// const Quote = mongoose.model ("Quote", quoteSchema)
// dit doen we in app.js
// en dan kan je nieuwe quotes maken volgens dit schema
// var testQuote = newQuote({
    //     quote: 'eerst effe testen!' ,
    //     author : 'me',
    //     image : 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSrry8x8XgAhXBmLQKHWT6D84QjRx6BAgBEAU&url=http%3A%2F%2Fclipart-library.com%2Fgarfield-cliparts.html&psig=AOvVaw2e8rB41jRla6KM6FiiO5Kn&ust=1550588779028339'
    // });