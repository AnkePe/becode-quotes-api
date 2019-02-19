const jsonfile = require("jsonfile");


const express = require('express')
const router = express.Router()
const Quote = require("../models/quote")

// app.method(PATH, HANDLER)

router.get('/quotes', (req,res,next) => {
    // handlerfunctie hier
    // res.send('quotes page')
    Quote.find()
})

router.get('/quotes/:id', (req,res,next) => {
    // handlerfunctie hier    
    // res.send('een specifieke quote met id als parameter')
    Quote.findById(req.params.id, (err, quote) => {
        if (err) return next(err);
        res.send(quote);
    })
})

router.post('/quotes', (req,res,next)=> {
    // handlerfunctie hier  
    // res.send('Got a POST request')
    let quote = new Quote(
        {
            quote: req.body.quote,
            author: req.body.author,
            image: req.body.image
        }
    );
    quote.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Quote Created successfully')
    })
})

router.put('/quotes/:id', (req,res,next) => {
    // handlerfunctie hier 
    // res.send('Got a PUT request at /quotes/:id')    
    Quote.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, quote) => {
            if (err) return next(err);
            res.send('Quote udpated.');
        });
    
})

router.delete('/quotes/:id', (req,res,next)=> {
    // handlerfunctie hier 
    // res.send('Got a DELETE request at /quotes/:id') 
    Quote.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
})

module.exports = router