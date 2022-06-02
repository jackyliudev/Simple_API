const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

const PORT = 8000;

app.use(express.static('public'))

const characters = {
    'sam':{
        'hp':100,
        'attack':20,
        'defense':15
    },
    'iris':{
        'hp':105,
        'attack':24,
        'defense':10
    },
    'zeus':{
        'hp':110,
        'attack':25,
        'defense':5
    }
}

function landingPage(req,res){
    res.sendFile(__dirname + '/index.html')
}

function getCharacter(req,res){
    //console.log(req.params.charName)
    console.log(req.query.name)
    if(characters[req.query.name.toLowerCase()]){
        res.json(characters[req.query.name.toLowerCase()])
    }
    else{
        res.json('No Character Found')
    }
}

app.get('/',landingPage)
app.get('/api', getCharacter)

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})