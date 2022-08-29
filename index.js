import Dog from './Dog.js'
import dogs from './data.js'
let currentIndex = 0
let newDog = new Dog(dogs[currentIndex])
document.getElementById('like').addEventListener('click', like)
document.getElementById('nope').addEventListener('click', nope)

render()

function render(){
    document.getElementById('profile').innerHTML = 
        currentIndex < dogs.length ? 
            newDog.getDogHtml() : 
            endMessage()
}

function getNewDog(){
        currentIndex += 1
        newDog = new Dog(dogs[currentIndex])
        render()
}

function endMessage(){
    return (
        `<div class='end-line'>
        <h4>It's all for today! 😔</h4>
        <p>Come back tomorrow for more fun 🤩 & 🐶!</p>
        </div>
        `
    )
}

function like(){
    newDog.opinionBadge(true)
    render()
    setTimeout(getNewDog, 1000)
}

function nope(){
    newDog.opinionBadge(false)
    render()
    setTimeout(getNewDog, 1000)
}
