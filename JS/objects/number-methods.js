let num = 36.389

console.log(num)


console.log(num.toFixed(2))


console.log(num)

let makeGuess = function(guess){
 let randomNum = (Math.floor( Math.random() * 5)) + 1
 return (guess === randomNum)
}

console.log(makeGuess(3))
console.log(makeGuess(3))
console.log(makeGuess(3))
console.log(makeGuess(3))
console.log(makeGuess(3))
