import dogs from './data.js'

class Dog{
    constructor(data){
        Object.assign(this, data)
        this.badge = ''
    }
    
    opinionBadge(bool){
        this.hasBeenLiked = bool 
        this.badge = bool ? 
            `<img  class='badge' src="./images/badge-like.png" />` 
            : `<img  class='badge' src="./images/badge-nope.png"/>`
        this.hasBeenSwiped = true
    }
    
    getDogHtml(){
        const {name, avatar, age, bio, badge} = this
        return (
            `   ${badge}
                <img class='avatar' src="${avatar}"/>
                <div class='info'>
                    <h4>${name}, ${age}</h4>
                    <p>${bio}</p>
                </div>`
        )

    }
}

export default Dog