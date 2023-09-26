// Create class below
class Food {
    constructor (name, daysToSpoil = 0, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    prepare () {
        console.log(`${this.name} is being prepared`)    
    }
    isFresh() {
        console.log(
            this.daysToSpoil > 0 ?
            `There are ${this.daysToSpoil} days left before ${this.name} spoils.` : 
            `${this.name} has spoiled.`
        )
        this.fresh = this.daysToSpoil <= 0 ? false : true
    }
    aDayPasses () {
        this.daysToSpoil --
        this.isFresh()
    }
}



// Do not edit below this line
module.exports = Food;
