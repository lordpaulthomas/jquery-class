
// game title
var gameTitle$ = $("<h1>")
gameTitle$.text("Crystal Game")
gameTitle$.addClass("titleText")
$(".crystalGame").append(gameTitle$)

// rules to the game
var gameRules$ = $('<p>')
gameRules$.html("You will be given a random number at the start of the game. <br/><br/>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.  <br/><br/>You win the game by matching your total score to target number.  <br/><br/>If you go over the target number, you lose the game.  <br/><br/>The value of each crytsal is hidden from you unitl you click on it.  <br/><br/>Each time when the game starts, the game will change the values of each crystal.")
gameRules$.addClass("rulesBox")
$(".crystalGame").append(gameRules$)



// generate random number
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// generate and display the target number
targetNumber$ = getRandomArbitrary(50, 150)
var target$ = $("<div>")
target$.addClass('targetNumber')
target$.text(`Number to hit is : ${targetNumber$}`)
$(".crystalGame").append(target$)

// crystals section

crystalOne$ = $("<img>")
crystalOne$.addClass('crystalBox')
crystalOne$.attr("src", "./assests/images/first_crystal.jpg")
crystalOne$.attr("data-crystalvalue", getRandomArbitrary(3, 8))
$(".crystalGame").append(crystalOne$)

crystalTwo$ = $("<img>")
crystalTwo$.addClass('crystalBox')
crystalTwo$.attr("src", "./assests/images/second_crystal.jpeg")
crystalTwo$.attr("data-crystalvalue", getRandomArbitrary(9, 14))
$(".crystalGame").append(crystalTwo$)

crystalThree$ = $("<img>")
crystalThree$.addClass('crystalBox')
crystalThree$.attr("src", "./assests/images/third_crystal.jpg")
crystalThree$.attr("data-crystalvalue", getRandomArbitrary(15, 20))
$(".crystalGame").append(crystalThree$)

crystalFour$ = $("<img>")
crystalFour$.addClass('crystalBox')
crystalFour$.attr("src", "./assests/images/fourth_crystal.jpg")
crystalFour$.attr("data-crystalvalue", getRandomArbitrary(21, 26))
$(".crystalGame").append(crystalFour$)

// use this counter to track the user's score
var counter = 0;

// this is the <div> that displays the user's total
counterDiv$ = $("<div>")
counterDiv$.addClass("counter")

// this is the main game play loop

$(".crystalBox").on("click", function () {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    counterDiv$.text(`Your current total is :  ${counter}`)
    $(".crystalGame").append(counterDiv$)

    if (counter === targetNumber$) {
        alert('You win')
    }
    else if (counter > targetNumber$) {
        alert("You Lose")
    }
})






