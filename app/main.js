const possibleChoices = ["rock", "paper", "scissors"]
let outcome = document.getElementById("outcome")
let currentPlayer = {}


function play(playerChoice){
   let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
   assignCompChoice(computerChoice)

    if(playerChoice === computerChoice){
        outcome.innerText="TIE!"
        return console.log("tie!")
    }
    if(playerChoice === "rock" && computerChoice === "scissors"){
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "rock" && computerChoice === "paper"){
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    }
    if(playerChoice === "paper" && computerChoice === "rock"){
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "paper" && computerChoice === "scissors"){
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    }
    if(playerChoice === "scissors" && computerChoice === "paper"){
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "scissors" && computerChoice === "rock"){
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    }
}

function assignCompChoice(computerChoice){
    const compChoiceElem = document.getElementById("compChoice")
    if(computerChoice === "rock"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-rock"></i>`
        return console.log("rock")
    }
    if(computerChoice === "paper"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-paper"></i>`
        return console.log('paper')
    }
    if(computerChoice === "scissors"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-scissors"></i>`
        return console.log('scissors')
    }
}

function setPlayer(event){
    event.preventDefault()

    let form = event.target
    let playerName = form.playerName.value
}

function storePlayer(){

}

function endGame(){

}