// bank of words. This will be what our program chooses from
  // all thse will go into an array
// from the array we need to choose one
  // JS method to get a random number - use that as an index on our word array
// The word we choose we need to convert into an array
  // enables us to loop through and check if a certain letter in in that word - if statement
// have event listener for keypress

var wordBank = ["sun", "sand", "beach", "beer"]
var wrongLetters = []
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]

var wordArray = chosenWord.split('')

var wordUnderscoreArray = []

for (var i = 0; i < wordArray.length; i++) {
  wordUnderscoreArray.push('_ ')
}

$('.word-underscore-array').html(wordUnderscoreArray)
console.log(wordArray);
console.log(wordUnderscoreArray);


var remainingGuesses = 7

$('.remaining-guesses').html(remainingGuesses)

$(document).on('keyup', function(event){
  remainingGuesses--
  wrongLetters.push(event.key);
  $(".letters-guessed").html(wrongLetters);


  for (var i = 0; i < wordArray.length; i++) {
    if (event.key == wordArray[i]){
      remainingGuesses++
      wordUnderscoreArray[i] = wordArray[i]
      $('.word-underscore-array').html(wordUnderscoreArray)
      setTimeout(function(){
        alert('you are right. ' + event.key + ' is in the word')
      }, 50)
    }
  }

  if(remainingGuesses == 0){

    setTimeout(function(){
      alert('Game over')
    }, 50)
  }
var reset = function(){
  

}

  $('.remaining-guesses').html(remainingGuesses)

  console.log(event.key);
})