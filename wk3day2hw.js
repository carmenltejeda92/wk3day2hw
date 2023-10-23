/*  Author: C. Tejeda
    Date: 10.22.2023
    Purpose: Homework for week3 day2 - create a cat class & a Pirate constructor */



class Cat{
    constructor(eyes, limbs, fur, whiskers){
        this.eyes = eyes
        this.limbs = limbs
        this.fur = fur
        this.whiskers = whiskers
    }

    eat(){
        console.log('yum, yum, yum')
    }

    noise(){
        console.log('meow, meow, meow')
    }

    play(){
        console.log('Im playing with a yarn ball')
    }
}


const Arnold = new Cat(2, 4, true, true)
console.log(Arnold)
Arnold.noise()

const Grandpa = new Cat(2, 4, false, false)
console.log(Grandpa)
Grandpa.play()





/* Pirate Class */
class Pirate{
    constructor(eyepatch, woodLeg, beard){
        this.eyepatch = eyepatch
        this.woodLeg = woodLeg
        this.beard = beard
    }

    noise(){
        console.log('Arrrrrggghh!!')
    }

    steer(){
        console.log('I am manning the wheel, Captain!')
    }

    lookout(){
        console.log('Land ahoy!')
    }
}

let blackPearl = ['Jack Sparrow', 'Elizabeth Swam', 'Will Turner']


let jollyRoger = ['Hector Barbossa', 'Anamaria', 'James Norring']















