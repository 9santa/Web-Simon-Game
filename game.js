var gameStarted = false

var buttonColors = ["red", "blue", "green", "yellow"]
var randomChosenColor = buttonColors[nextSequence()]

var gamePattern = []
gamePattern.push(randomChosenColor)
var userClickedPattern = []

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4)

	return randomNumber
}

$("#" + randomChosenColor)
	.fadeToggle(100)
	.fadeToggle(100)

function playSound(color) {
	switch (color) {
		case "red":
			var redSound = new Audio("./sounds/red.mp3")
			redSound.volume = 0.025
			redSound.play()
			break
		case "green":
			var greenSound = new Audio("./sounds/green.mp3")
			greenSound.volume = 0.025
			greenSound.play()
			break
		case "yellow":
			var yellowSound = new Audio("./sounds/yellow.mp3")
			yellowSound.volume = 0.025
			yellowSound.play()
			break
		case "blue":
			var blueSound = new Audio("./sounds/blue.mp3")
			blueSound.volume = 0.025
			blueSound.play()
			break

		default:
			break
	}
}

console.log("random color is: " + randomChosenColor)

function animatePress(currentColor) {
	currentColor.addClass("pressed")
	setTimeout(function () {
		currentColor.removeClass("pressed")
	}, 100)
}

$(".btn").on("click", function () {
	var userChosenColor = $(this).attr("id")
	console.log(userChosenColor)

	playSound(userChosenColor)
	animatePress($(this))
	userClickedPattern.push(userChosenColor)
	// console.log(userClickedPattern)
})

if (!gameStarted) {
	$(document).on("keypress", function () {
		nextSequence()
		gameStarted = true
		console.log(gameStarted)
	})
}
console.log(gameStarted)
