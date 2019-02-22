
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// environment variabels
require('dotenv').config()  // gebruik de env file voor uw locale gevoelige info variabelen

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

//use bodyparser
app.use(bodyParser.json())

//cross site request toelaten voor iedereen
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//use routes
app.use(quoteRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})  // MONGO_URL zit in aparte .env file
// volgende gebeurt eigenlijk vanzelf, alleen handig om te zien of het gelukt is
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function(callback) {
	console.log('Connected to database.');
});

app.get('/', (req, res) => {
    res.send('Hello World')
  })



const PORT = process.env.PORT || 5000   // heroku kiest poort en anders is het poort 5000

// start server helemaal onderaan
app.listen(PORT, () => {    
    console.log(`listening on ${PORT}`)
  })

