let possibleChoices = ["rock", "paper", "scissors"]
let currentPlayer = {}
let outcome = document.getElementById("outcome")
let playerSelection = document.getElementById("playerSelection")

function play(playerChoice){
   let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
   assignCompChoice(computerChoice)

    if(playerChoice === "rock" && computerChoice === "scissors"){
        playerSelection.innerHTML=`<i class="far fa-hand-rock"></i>`
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "rock" && computerChoice === "paper"){
        playerSelection.innerHTML=`<i class="far fa-hand-rock"></i>`
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    }
    if(playerChoice === "paper" && computerChoice === "rock"){
        playerSelection.innerHTML=`<i class="far fa-hand-paper"></i>`
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "paper" && computerChoice === "scissors"){
        playerSelection.innerHTML=`<i class="far fa-hand-paper"></i>`
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    }
    if(playerChoice === "scissors" && computerChoice === "paper"){
        playerSelection.innerHTML=`<i class="far fa-hand-scissors"></i>`
        outcome.innerText="YOU WIN! :)"
        return console.log("you win!")
    }
    if(playerChoice === "scissors" && computerChoice === "rock"){
        playerSelection.innerHTML=`<i class="far fa-hand-scissors"></i>`
        outcome.innerText="YOU LOSE! :("
        return console.log("you lose!")
    } else {
        outcome.innerText="TIE!"
        return console.log("tie!")
    }
    }

function assignCompChoice(compChoice){
    let compChoiceElem = document.getElementById("compChoice")
    if(compChoice === "rock"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-rock"></i>`
        return console.log("rock")
    }
    if(compChoice === "paper"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-paper"></i>`
        return console.log("rock")
    }if(compChoice === "scissors"){
        compChoiceElem.innerHTML=`<i class="far fa-hand-scissors"></i>`
        return console.log("rock")
    }
}

function assignPlayerSelection(playerSelection){
    let playerSelectionElem = document.getElementById("playerSelection")
    if(playerSelection === "rock"){
        playerSelectionElem.innerHTML=`<i class="far fa-hand-rock"></i>`
        return console.log("rock")
    }
    if(playerSelection === "paper"){
        playerSelectionElem.innerHTML=`<i class="far fa-hand-paper"></i>`
        return console.log("paper")
    }
    if(playerSelection === "scissors"){
        playerSelectionElem.innerHTML=`<i class="far fa-hand-scissors"></i>`
        return console.log("scissors")
    }
}


function setPlayer(event){
    event.preventDefault()

    let form = event.target
    let playerName = form.playerName.value
}

