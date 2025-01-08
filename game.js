var gameStarted = false
var level = 0

var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

function nextSequence() {
	userClickedPattern = []
	var randomNumber = Math.floor(Math.random() * 4)
	var randomChosenColor = buttonColors[randomNumber]
	gamePattern.push(randomChosenColor)

	$("#" + randomChosenColor)
		.fadeToggle(100)
		.fadeToggle(100)

	$("#level-title").text("Level " + ++level)

	console.log(gamePattern)
	// console.log(userClickedPattern)

	return randomChosenColor
}

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

function animatePress(currentColor) {
	currentColor.addClass("pressed")
	setTimeout(function () {
		currentColor.removeClass("pressed")
	}, 100)
}

$(".btn").on("click", function () {
	var userChosenColor = $(this).attr("id")
	userClickedPattern.push(userChosenColor)

	playSound(userChosenColor)
	animatePress($(this))

	checkAnswer(userClickedPattern[userClickedPattern.length - 1])
	console.log(userClickedPattern)
})

function checkAnswer(currentLevel) {
	if (currentLevel == gamePattern[userClickedPattern.length - 1]) {
		// console.log("success")
		if (userClickedPattern.length == gamePattern.length) {
			setTimeout(function () {
				nextSequence()
			}, 1000)
		}
	} else {
		// console.log("wrong")

		$("#level-title").text("Game Over")
		level = 0
		userClickedPattern = []
		gamePattern = []
	}
}

console.log(gameStarted)
if (!gameStarted) {
	gameStarted = true
	$(document).one("keypress", function () {
		nextSequence()
		// $("#level-title").text("Level " + level)

		console.log(gameStarted)
	})
}
