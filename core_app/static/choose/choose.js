const BLUEBUTTON = document.getElementById("blueTeam")
const REDBUTTON = document.getElementById("redTeam")


BLUEBUTTON.addEventListener("click", () => {
    console.log("blue team choosed!")
    document.cookie = "team = Blue"
})
REDBUTTON.addEventListener("click", () => {
    console.log("red team choosed!")
    document.cookie = "team = Red"
})