let name = 'Dave Morley'
console.log(name.length)

console.log(name.toUpperCase())
console.log(name)

let isValidPassword = function(password){
    return ((password.length > 8) && !(password.includes('password')))
}

console.log(isValidPassword('asdg'))
console.log(isValidPassword('asdgpassword'))
console.log(isValidPassword('asdgadfasdf'))