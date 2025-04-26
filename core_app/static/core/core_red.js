const SOCKET_URL = `ws://${window.location.host}/game_red/`
const SOCKET = new WebSocket(SOCKET_URL)

const ROCK = document.getElementById("rock")
const PAPER = document.getElementById("paper")
const SCISSORS = document.getElementById("scissors")

const ROCKIMG = document.getElementById("rockImg")
const PAPERIMG = document.getElementById("paper")
const SCISSORSIMG = document.getElementById("scissors")

ROCK.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "rock" }))

})

PAPER.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "paper" }))

})

SCISSORS.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "scissors" }))

})