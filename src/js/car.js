export default {
    color: 'white',
    doors: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],
    put: boardingPassengers,
    land: disembarkationPassengers,
    drive: updateCarSpeed
};

function boardingPassengers() {
    if (this.passengers.length < this.seats) {
        this.passengers.push('true');
    }
}

function disembarkationPassengers() {
    if (this.passengers.length >= 1) {
        this.passengers.pop();
    }
    if (this.passengers.length < 1) {
        this.passengers.pop();
        this.speed = 0;
    }
}


function updateCarSpeed(newSpeed) {
    if (this.passengers[0] === undefined) {
        return;
    }

    this.speed = this.defaultSpeed;

    if (newSpeed < this.maxSpeed) {
        this.speed = newSpeed;
    }
    if (newSpeed >= this.maxSpeed) {
        this.speed = this.maxSpeed;
    }
}