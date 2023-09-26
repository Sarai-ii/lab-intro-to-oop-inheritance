// Create class below
class Tamagotchi {
    constructor (name) {
        this.name  = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }
    greet () {
        `Hello, I'm ${this.name}!`
    }  
    status () {
        `••••••••••••••••••••/n
        My mood is: ${this.mood} /n
        Fullness Level: ${this.full} /n
        Energy Level: ${this.energy} /n
        I am ${this.sick? `sick`: `not sick`} /n
        ••••••••••••••••••••`
    }
    eat () {
        this.full += 2
        this.full > 10 ? this.sick = true : this.sick = false
        this.energy --
    }
    medicate () {
        if(this.sick) { 
            this.full = 9 
            this.energy -= 3
            this.sick = false

        } else {
            console.log(`No medicine please`)
            this.energy -= 1
        }
    }
    play () {
        if(this.sick){
            this.mood -= 1
            this.energy -= 1
        }
        else if(this.mood > 9) {
            this.full -= 1
            this.energy -= 2
        } 
        else if (this.energy <= 3){
            console.log(`I am too tired to play`)
            this.energy -= 1
        } else {
            this.mood += 2
            this.energy --
            this.full --
        }
    }
    sleep () {
        this.energy += 4
        this.full -= 3
    }
    timePasses () {
        if(this.sick){
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        } else {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
    }
    badGuardian () {
        console.log(`Your tamagotchi has been rehomed due to negligence.`)
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
