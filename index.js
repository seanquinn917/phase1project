addEventListener("DOMContentLoaded", start)

function start(){
    console.log('hello')
    addButton()
}

function addButton(){
    let newDiv= document.createElement('div')
    let button = document.createElement('button')
    document.body.appendChild(newDiv)
    newDiv.appendChild(button)

}

