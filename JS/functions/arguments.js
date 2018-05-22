let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

let getScoreText = function (name = 'Vader', score = 0){
    return `${name}: ${score}`
}

console.log(getScoreText())


let getTip = function(total, tipPercent = .2){
    return `Your bill is $${total}. You should tip $${total *  tipPercent}`
}

console.log(getTip(10, .3))