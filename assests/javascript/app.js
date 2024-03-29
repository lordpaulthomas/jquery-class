
// game title
var gameTitle$ = $("<h1>")
gameTitle$.text("Crystal Collector!")
gameTitle$.addClass("titleText")
$(".crystalGame").append(gameTitle$)

// rules to the game
var gameRules$ = $('<p>')
gameRules$.html("You will be given a random number at the start of the game. <br/><br/>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.  <br/><br/>You win the game by matching your total score to target number.  <br/><br/>If you go over the target number, you lose the game.  <br/><br/>The value of each crytsal is hidden from you unitl you click on it.  <br/><br/>Each time when the game starts, the game will change the values of each crystal.")
gameRules$.addClass("rulesBox")
$(".crystalGame").append(gameRules$)

// function to generate random number
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// this function resets the game after each win or loss
function resetGame() {
    winsLosses$.html(`Wins: ${wins} <br/><br/><br/>Losses: ${losses}`)
    counter = 0;
    crystalOne$.attr("data-crystalvalue", getRandomArbitrary(2, 3))
    $(".crystalGame").append(crystalOne$)
    crystalTwo$.attr("data-crystalvalue", getRandomArbitrary(4, 6))
    $(".crystalGame").append(crystalTwo$)
    crystalThree$.attr("data-crystalvalue", getRandomArbitrary(7, 9))
    $(".crystalGame").append(crystalThree$)
    crystalFour$.attr("data-crystalvalue", getRandomArbitrary(10, 12))
    $(".crystalGame").append(crystalFour$)
    counterDiv$.html(`Your current total is :<br/><br/>  ${counter}`)
    targetNumber$ = getRandomArbitrary(19, 120)
    target$.text(`Number to hit is : ${targetNumber$}`)
    
}

// generate and display the target number
targetNumber$ = getRandomArbitrary(19, 120)
var target$ = $("<div>")
target$.addClass('targetNumber')
target$.text(`Number to hit is : ${targetNumber$}`)
$(".crystalGame").append(target$)

// this counter tracks the user's score
var counter = 0;


// this is the <div> that displays the user's total
counterDiv$ = $("<div>")
counterDiv$.addClass("counter")

// wins and losses section
var wins = 0;
var losses = 0;
winsLosses$ = $("<div>")
winsLosses$.addClass("wins-losses")
winsLosses$.html(`Wins: ${wins} <br/><br/><br/>Losses: ${losses}`)
$(".crystalGame").append(winsLosses$)


// crystals section
crystalOne$ = $("<img>")
crystalOne$.addClass('crystalBox')
crystalOne$.attr("src", "./assests/images/first_crystal.jpg")
crystalOne$.attr("data-crystalvalue", getRandomArbitrary(2, 3))
$(".crystalGame").append(crystalOne$)

crystalTwo$ = $("<img>")
crystalTwo$.addClass('crystalBox')
crystalTwo$.attr("src", "./assests/images/second_crystal.jpeg")
crystalTwo$.attr("data-crystalvalue", getRandomArbitrary(4, 6))
$(".crystalGame").append(crystalTwo$)

crystalThree$ = $("<img>")
crystalThree$.addClass('crystalBox')
crystalThree$.attr("src", "./assests/images/third_crystal.jpg")
crystalThree$.attr("data-crystalvalue", getRandomArbitrary(7, 9))
$(".crystalGame").append(crystalThree$)

crystalFour$ = $("<img>")
crystalFour$.addClass('crystalBox')
crystalFour$.attr("src", "./assests/images/fourth_crystal.jpg")
crystalFour$.attr("data-crystalvalue", getRandomArbitrary(10, 12))
$(".crystalGame").append(crystalFour$)

// this is the main game play loop

$(".crystalBox").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue)
    counter += crystalValue;
    counterDiv$.html(`Your current total is :<br/><br/>  ${counter}`)
    $(".crystalGame").append(counterDiv$)
    if (counter === targetNumber$) {
        wins++;
        resetGame();
        alert('You Win');
    }
    else if (counter > targetNumber$) {
        losses++;
        resetGame();
        alert("You Lose");
    }
})






