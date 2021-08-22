const data = require('./data');

const express = require('express')

const app = express()

var animalFacts = data.data;


app.get('/', async (req, res) => {

    var randomInt = getRandomInt(animalFacts.length);
    var randomFact = animalFacts[randomInt];

    res.json({status: 'success', data: randomFact});

    
   
});


 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
} );


