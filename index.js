



addEventListener("DOMContentLoaded", (e)=>{
    byType();
    byName();
    byState();
    // clearList();
    changePic()




})


let image_tracker= 'orange'
function changePic(){
    const pic = document.getElementById('imageID')
    pic.addEventListener('click', (e)=>{
        e.preventDefault()
        if(image_tracker==='orange'){
            //console.log('is this happening?')
            pic.src = "https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            image_tracker ='blue;'
           return
        } 
        else {
            image_tracker = 'orange';  
            pic.src ="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&dl=wil-stewart-UErWoQEoMrc-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            return
            //console.log('THIS!!')
    }
    })
    }
 





//this function searches the data by brewery NAME and returns the brewery 
//that matches and appends it to the DOM
const byName = ()=>{
    const inputForm = document.getElementById('form1')
    // console.log(inputForm)
    inputForm.addEventListener('submit', (e) =>{
        // console.log( "i was clicked!")
        e.stopImmediatePropagation()
        e.preventDefault()
        const input = document.querySelector('input#searchByName')
        // console.log("name??", input.value)
            fetch(`https://api.openbrewerydb.org/breweries?by_name=${input.value}`)
            .then((resp)=>resp.json())
            .then((data)=> displayBreweries(data[0]));
            inputForm.reset();
            addButton()
    })
    
}

const headLine = document.getElementById("myHeader")

headLine.addEventListener('mouseover', (e)=>{
    // console.log("mouseover!")
    if(headLine.style.color = 'olive'){
        headLine.style.color = 'yellow'
    } 
    setTimeout(()=>{
        headLine.style.color = 'olive'
    }, 500)
    
})



// this function searches the data by STATE and returns the results
// it then appends it to the DOM in a list
function byState(){
    const inputForm = document.getElementById('form2')
    // console.log(inputForm)
    inputForm.addEventListener('submit', (e) =>{
        e.stopImmediatePropagation()
        e.preventDefault()
        const input = document.getElementById('searchByState')
        // console.log("state??", input)
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${input.value}`)
        .then((resp)=>resp.json())
        .then((data)=> data.forEach(brewery => displayBreweries(brewery)))
        inputForm.reset();
        addButton()
    })
}

function byType(){
    const inputForm = document.getElementById('form3')
    // console.log(inputForm)
    inputForm.addEventListener('submit', (e) =>{
        e.stopImmediatePropagation();
        e.preventDefault();
        const input = document.getElementById('searchByType')
        // console.log(input.value, "type??")
        fetch(`https://api.openbrewerydb.org/breweries?by_type=${input.value}`)
        .then((resp)=>resp.json())
        .then((data)=> data.forEach(brewery => displayBreweries(brewery)))
        inputForm.reset()
        addButton()
    })
}

//function creates a "card" from data and appends that card to the DOM
function displayBreweries(brewery){
    let card = document.createElement('li');
    card.className = 'card'
    card.innerHTML = `
    <div id= 'list' class= "content">
            ${brewery.name},
            ${brewery.brewery_type},
            ${brewery.street},
            ${brewery.city},
            ${brewery.country},
            ${brewery.phone}
    </div>
    `
    document.body.appendChild(card)
}


function addButton(){
 let button = document.createElement('button')
 button.innerHTML = `
 <button id='button' type ='button'>New Search!</button>
 `
 const holder = document.getElementById('listholder')
//  console.log(holder)
 holder.appendChild(button)
 
}

// function clearList(){
//     document.getElementById('list').innerHTML=''
// }

// const butt = document.getElementById("button")
// console.log(butt)






// // let select = document.getElementById("select")
// // let list = document.getElementById("list")
// // select.onclick = function(){
// //     list.classList.toggle("open");
// // }

