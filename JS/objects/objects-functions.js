let myBook = {
    title: 'Gates of Fire',
    author: 'Steven Pressfield',
    pageCount: 450
}

let otherBook = {
    title: 'Oathbringer',
    author: 'Brandon Sanderson',
    pageCount: 1050
}

let getSummary = function (book){
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)

let tempCalc = function(fahrenheit){
    return {
         celsius:  (fahrenheit - 32) * 5/9,
        kelvin:  (fahrenheit + 459.67) * 5/9,
        fahrenheit: fahrenheit
    }
}

console.log(tempCalc(74))