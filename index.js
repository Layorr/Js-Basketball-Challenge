let homeScore = document.getElementById("home-score")
let homeIncrement = 0


let guestScore = document.getElementById("guest-score")
let guestIncrement = 0

function homeIncrement1() {
    homeIncrement = homeIncrement + 1
    homeScore.textContent = homeIncrement
    
}

function homeIncrement2() {
    homeIncrement = homeIncrement + 2
    homeScore.textContent = homeIncrement
    
}

function homeIncrement3() {
    homeIncrement = homeIncrement + 3
    homeScore.textContent = homeIncrement
}

function guestIncrement1() {
    guestIncrement = guestIncrement + 1
    guestScore.textContent = guestIncrement
}

function guestIncrement2() {
    guestIncrement = guestIncrement + 2
    guestScore.textContent = guestIncrement
}

function guestIncrement3() {
    guestIncrement = guestIncrement + 3
    guestScore.textContent = guestIncrement
}

