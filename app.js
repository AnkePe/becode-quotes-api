
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()   // een express applicatie definieren 
const quoteRoutes = require('./routes/quotesRoutes')  // gebruik deze routes
const Quote = require("./models/quote") // gebruik dit model

// test invoer quote
// var testQuote = new Quote({ 
//     quote: 'eerst effe testen!' ,
//     author : 'me',
//     image : 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSrry8x8XgAhXBmLQKHWT6D84QjRx6BAgBEAU&url=http%3A%2F%2Fclipart-library.com%2Fgarfield-cliparts.html&psig=AOvVaw2e8rB41jRla6KM6FiiO5Kn&ust=1550588779028339'
// });

// console.log(testQuote.author); // 'me'
// testQuote.save((err) => {
//     if (err) return handleError(err);
//     // saved!
//   });

//use routes
app.use(quoteRoutes) 

// connect to DB
mongoose.connect('mongodb://AnkePe:Ih4kidshewl!@quotes-shard-00-00-sdzte.mongodb.net:27017,quotes-shard-00-01-sdzte.mongodb.net:27017,quotes-shard-00-02-sdzte.mongodb.net:27017/test?ssl=true&replicaSet=Quotes-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true})
// volgende gebeurt eigenlijk vanzelf, alleen handig 
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function(callback) {
	console.log('Connected to database.');
});

app.get('/', (req, res) => {
    res.send('Hello World')
  })





// start server helemaal onderaan
app.listen(5000, () => {    
    console.log('listening on 5000')
  })

