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


ROCK.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "rock", "team": "red" }))
    CHOOSED.style.display = "block"
    CHOOSEDIMG.src = "/media/core/rock.webp"
})

PAPER.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "paper", "team": "red" }))
    CHOOSED.style.display = "block"
    CHOOSEDIMG.src = "/media/core/paper.webp"
})

SCISSORS.addEventListener("click", () => {

    SOCKET.send(JSON.stringify({ "item": "scissors", "team": "red" }))
    CHOOSED.style.display = "block"
    CHOOSEDIMG.src = "/media/core/scissors.webp"
})