//const res = require("express/lib/response")

const getChar = document.querySelector('#getCharacter')
const charName = document.querySelector('#charName')
const nameVal = document.querySelector('#name')
const att = document.querySelector('#att')
const hp = document.querySelector('#hp')
const def = document.querySelector('#def')

const charApi = 'https://simple-charater-api.herokuapp.com/api?name='

getChar.addEventListener('click',retrieveChar)

async function retrieveChar(){
    try{
        const res = await fetch(charApi + charName.value);
        const resp = await res.json();
        if(resp == 'No Character Found'){
            nameVal.innerHTML = 'Name: Not Found';
            att.innerHTML = 'Attack: 0';
            hp.innerHTML = 'HP: 0';
            def.innerHTML = 'Defense: 0';
        }
        else{
            nameVal.innerHTML = 'Name:' + charName.value[0].toUpperCase() + charName.value.slice(1)
            att.innerHTML = 'Attack: ' + resp['attack']
            hp.innerHTML = 'HP: ' + resp['hp']
            def.innerHTML = 'defense: ' + resp['defense']
        }
    }

    catch(error){
        console.error(err)
    }
}