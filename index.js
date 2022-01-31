let count = 0
let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count=count+1
    countEl.textContent = count
}

let nameOf = "Let's start the show!"
let welcomeEl=document.getElementById("welcome-el")
welcomeEl.textContent = nameOf
welcomeEl.textContent+="😁🔥"

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
}



