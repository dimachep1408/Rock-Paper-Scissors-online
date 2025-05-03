const SOCKET_URL = `ws://${window.location.host}/game_red/`
const SOCKET = new WebSocket(SOCKET_URL)

const ROCK = document.getElementById("rock")
const PAPER = document.getElementById("paper")
const SCISSORS = document.getElementById("scissors")

const ROCKIMG = document.getElementById("rockImg")
const PAPERIMG = document.getElementById("paper")
const SCISSORSIMG = document.getElementById("scissors")

const CHOOSED = document.getElementById("choosed")
const CHOOSEDIMG = document.getElementById("choosedImg")

const IS_USERS_ENOUGH = document.getElementById("isEnough").textContent

const COUNTDOWN = document.getElementById("countdown_or_warning")

const TIMERWORKER = new Worker("/core_app/static/core/workers/timerworker.js")

console.log(IS_USERS_ENOUGH)
if (IS_USERS_ENOUGH === "False") {
    COUNTDOWN.textContent = "Wait for player in other command"
} else {
    COUNTDOWN.textContent = 5000

    TIMERWORKER.postMessage(COUNTDOWN.textContent)
}

TIMERWORKER.onmessage = function (event) {
    COUNTDOWN.textContent = event.data
    console.log("mewgwmeik")
}

ROCK.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "rock", "team": "red" }))
    CHOOSED.style.display = "flex"
    CHOOSEDIMG.src = "/media/core/rock.webp"
})

PAPER.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "paper", "team": "red" }))
    CHOOSED.style.display = "flex"
    CHOOSEDIMG.src = "/media/core/paper.webp"
})

SCISSORS.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "scissors", "team": "red" }))
    CHOOSED.style.display = "flex"
    CHOOSEDIMG.src = "/media/core/scissors.webp"
})