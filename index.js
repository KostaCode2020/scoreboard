let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let resetBtn = document.getElementById("home-el")
let resetBtnTwo = document.getElementById( "guest-el")


let countHome = 0
let countGuest = 0

//Home Buttons

function incrementHomeOne() {
    countHome = countHome + 1
    homeEl.textContent = countHome
}

function incrementHomeTwo() {
    countHome = countHome + 2
    homeEl.textContent = countHome
}

function incrementHomeThree() {
    countHome = countHome + 3
    homeEl.textContent = countHome
}

//New Game Button

function reset() {
    countHome = 0
    countGuest = 0
    resetBtn.textContent = countHome
    resetBtnTwo.textContent = countGuest
}


//Guest Buttons

function incrementGuestOne() {
    countGuest = countGuest + 1
    guestEl.textContent = countGuest
}

function incrementGuestTwo() {
    countGuest = countGuest + 2
    guestEl.textContent = countGuest
}

function incrementGuestThree() {
    countGuest = countGuest + 3
    guestEl.textContent = countGuest
}