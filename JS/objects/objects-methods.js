let restaurant = {
    name: '5 guys',
    guestCapacity: 100,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        if (this.checkAvailability){
            this.guestCount += partySize
            return 'party was seated'
        } else {
            return 'Not enough capacity- party could not be seated'
        }
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

let status = restaurant.checkAvailability(4)
restaurant.seatParty(4)
restaurant.seatParty(4)
console.log(restaurant.guestCount)