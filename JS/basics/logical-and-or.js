let guestOneVegan = true
let guestTwoVegan = false

if (guestOneVegan && guestTwoVegan){
    console.log('only give vegan food')
} else if (guestOneVegan || guestTwoVegan){
    console.log('At least one vegan- include vegan options')
} else {
    console.log('Phew no vegans- meat feast!    ')
}