let player ={
    name: "Yusuf",
    chips: 500
}
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ''
let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('card-el')
let playerEl = document.getElementById('player-el')
    playerEl.textContent = player.name +": $"+ player.chips 

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1

     
        
    
    if (randomCard === 1) {
        return 11
    }else if (randomCard > 10){
        return 10
    }else {
        return randomCard
    }

    
}
console.log(getRandomCard())

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard,secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    sumEl.textContent = 'Sum: '+ sum

    for (let i = 0; i < cards.length; i++) {
       // console.log(cards[i])  
        cardsEl.textContent +=  cards[i] + " "
    }

    if (sum <= 20){
        message = 'Do you want to draw a new card?'
    }else if (sum === 21){
        message = 'You have a Blackjack!'
        hasBlackJack = true
    }else {
        message = 'You are out of the game!'
        isAlive = false
    }
    messageEl.textContent = message
}

let newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
        
    

    messageEl.textContent = 'Do you want to draw a new card?'
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }

}

/*let num1 = 8
let num2 = 2

document.getElementById('sp1').textContent = num1
document.getElementById('sp2').textContent = num2


function add() {
  let  addition = num1 + num2
  document.getElementById('sum').textContent = 'Sum: '+ addition
}

function sub() {
    let  subtraction = num1 - num2
    document.getElementById('sum').textContent = 'Sum: '+ subtraction
}

function dive() {
    let  division = num1 / num2
    document.getElementById('sum').textContent = 'Sum: '+ division
}

function mul() {
    let  multiply = num1 * num2
    document.getElementById('sum').textContent = 'Sum: '+ multiply
}*/

// big jack code
/*/ array

let myExperience = [
    'worked as an Engineer',
    'teacher',
    'dry cleaner',
    'madrasah'
]
console.log(myExperience)
console.log(myExperience[2])
console.log(myExperience[1])
console.log(myExperience[3])
console.log(myExperience[0])

let me =[
    'Yusuf', 22, false
]
let msg = 'Welcome'

console.log(me.length)
// add element to the end of an array
me.push(msg)
// remove last array element
me.pop()

console.log(me)*/

// for loop
/*let player1Time = 102
let player2Time = 107

function getFastestTime() {
    if (player1Time > player2Time) {
        return player1Time
    }else if(player2Time > player1Time){
        return player2Time
    }else {
        return player1Time
    }
}


function rollDice() {
    let random = Math.random() * 6 + 1
    let floor = Math.floor(random)
    return floor
}
console.log(rollDice())

function totalTime(params) {
    let sumOfTime = player1Time + player2Time
    return sumOfTime
}

let total = totalTime()
console.log(total)

let hasSolvedChallenge = false
let hasHintLeft = false

if (hasSolvedChallenge === false && hasHintLeft === false) {
    showSoution()
}

function showSoution(){
    console.log("showing solution...")
}

let likeDocumentaries = false
let likeStartups = false

if (likeDocumentaries === true || likeStartups === true) {
    
    recommendMovie()
} else {
    console.log("No recommended movies")
}

function recommendMovie(params) {
    console.log("Hey, check out this new film we think you will like it")
}

let castle = {
    greeting:" Hello, try out my castle",
    price: 100,
    isNight: true,
    drink: ["Wine", "coke"]

}

console.log(castle.greeting)
console.log(castle.price)

let person = {
    name: "Yusuf",
    age: 22,
    country: "Nigeria",	
}

function logData(params) {
    data = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(data)
}
logData()

let age = 67

if (age < 6) {
    console.log('free')
} else if (age < 18){
    console.log('child discount')
}else if ( age < 27){
    console.log('student discount')
}else if (age < 67) {
    console.log('full price')
}else (
    console.log('senior citizen discount')
)

let largeCountries = ['Tuvalu','India', 'USA', 'Indonesia', 'Monaco']
largeCountries.pop()
largeCountries.shift('Tuvalu')
largeCountries.unshift('china')
largeCountries.push('Pakistan')
for (let i = 0; i < largeCountries.length; i++) {
    console.log('- '+largeCountries[i])
}

let dayOfMonth = 13
let weekday = 'friday'
 if (dayOfMonth === 13 && weekday === 'friday') {
    console.log('Black friday')
}
// #################getting random array elements #################
let hand = ['rock', 'paper', 'scissors']

let random = ()=>{

    
        let rand = Math.floor(Math.random() * 3)
        
        return hand[rand]
        
    
}
console.log(random())

let fruits = ['apple','orange','apple','apple','orange']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')


//########################sort an array########################################
let sort = () => {

    for (let i = 0; i < fruits.length; i++){

        if (fruits[i] === 'orange') {
            orangeShelf.textContent += 'Orange' + ' '
        }else {
            appleShelf.textContent += 'apple' + ' ' 
        }
    }  
    
    return fruits
    
}
sort()*/