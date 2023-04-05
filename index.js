



addEventListener("DOMContentLoaded", (e)=>{
    byType();
    byName();
    byState();
    //emptyList()
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
        let list = document.getElementById("listholder")
        list.innerHTML = " "
        e.stopImmediatePropagation()
        e.preventDefault()
        const input = document.querySelector('input#searchByName')
        // console.log("name??", input.value)
            fetch(`https://api.openbrewerydb.org/breweries?by_name=${input.value}`)
            .then((resp)=>resp.json())
            .then((data)=> displayBreweries(data[0]));
            inputForm.reset();
            //emptyList()
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
        let list = document.getElementById("listholder")
        list.innerHTML = " "
        e.stopImmediatePropagation()
        e.preventDefault()
        const input = document.getElementById('searchByState')
        // console.log("state??", input)
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${input.value}`)
        .then((resp)=>resp.json())
        .then((data)=> data.forEach(brewery => displayBreweries(brewery)))
        inputForm.reset();
        //emptyList()
        addButton()
       
    })
}

function byType(){
    const inputForm = document.getElementById('form3')
    // console.log(inputForm)
    inputForm.addEventListener('submit', (e) =>{
        let list = document.getElementById("listholder")
        list.innerHTML = " "
        e.stopImmediatePropagation();
        e.preventDefault();
        const input = document.getElementById('searchByType')
        // console.log(input.value, "type??")
        fetch(`https://api.openbrewerydb.org/breweries?by_type=${input.value}`)
        .then((resp)=>resp.json())
        .then((data)=> data.forEach(brewery => displayBreweries(brewery)))
        inputForm.reset()
        addButton()
        //emptyList()
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
    document.getElementById("listholder").appendChild(card)
}


function addButton(){
 let button = document.createElement('button')
 button.innerHTML = `
 <button id='button' type ='button'>Clear Page</button>
 `
 const holder = document.getElementById('listholder')
//  console.log(holder)
 holder.appendChild(button)
 button.addEventListener('click', (e)=>{
    let list = document.getElementById("listholder")
    list.innerHTML = " "
    console.log('i was clicked!')
   
    
 
})
}

// function emptyList(){
    
//     button.addEventListener('click', (e)=>{
//         let list = document.getElementById("listholder")
//         list.innerHTML = " "
//         console.log('i was clicked!')
       
        
            
//         });
        
//     }




// // let select = document.getElementById("select")
// // let list = document.getElementById("list")
// // select.onclick = function(){
// //     list.classList.toggle("open");
// // }




// <!-- <form>
//             <h1>
//             <label for="searchByName">Search by Name</label>
//             <input id= "searchByName" type="text" placeholder="Enter Brewery Name"/>
//             <input type="submit"/>
//             </h1>
//             <h2>
//             <label for="searchByType">Search by Type</label>
//             <input id="searchByType" type="text" placeholder="Enter Brewery Type"/>
//             <input type="submit">
//             </h2>
//             <h3>
//                 <label for="searchByState">Search by State</label>
//                 <input id="searchByState" type="text" placeholder="Enter Brewery State"/>
//                 <input type="submit">
//             </h3>
//         </form> -->

// <!-- 
        
//         <form>
//             <label for="Breweries for you!">Let's find your Beer!</label>
//             <select search="search-types" id="search-types" onchange="find(this);" >
//                 <option selected="selected">Select Option</option>
//                 <option value="search by Name">Search By Name</option>
//                 <option value="search by State">Search By State</option>
//                 <option value="search by Type">Search By Type</option>
//             </select>
//             <div class="container">
//                 <div class="search-bar">
//                     <!-- <div id="select"> -->
//                         <!-- <p>All Categories</p>
//                         <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="Drop down arrow free icon">
//                         <ul>
//                             <li class= "options">All Categories</li>
//                             <li class= "options">Brewery Type</li>
//                             <li class= "options">Brewery State</li>
//                             <li class= "options">Brewery Name</li>
//                         </ul> -->
//                     <!-- </div> -->
//                     <input type="text" placeholder="Search in all catergories">
//                 </div>
//             </div>
//         </form> -->


//         <form>
//             <p>
//             <label for="searchByNameS">Search by Name</label>
//             <input id= "searchByName" type="text" placeholder="Enter Brewery Name"/>
//             <input type="submit"/>
//             </p>
//             <p2>
//             <label for="searchByType">Search by Type</label>
//             <input id="searchByType" type="text" placeholder="Enter Brewery Type"/>
//             <input type="submit">
//             </p2>
//             <br>
//             <p3>
//             <label for="searchByState">Search by State</label>
//             <input id="searchByState" type="text" placeholder="Enter Brewery State"/>
//             <input type="submit">
//             </p3>
//         </form>





//          <form>
//             <label for="Breweries for you!">Let's find your Beer!</label>
//             <select search="search-types" id="search-types" onchange="find(this);" >
//                 <option selected="selected">Select Option</option>
//                 <option value="search by Name">Search By Name</option>
//                 <option value="search by State">Search By State</option>
//                 <option value="search by Type">Search By Type</option>
//             </select>
//             <div class="container">
//             </div>
//         </form>

        

// // function find(){
//     const search = document.getElementById("search-types")
//     //console.log(search)
//     search.addEventListener('change',(e)=>{
//         e.preventDefault();
//         if(e.target.value === "search by Name"){
//             console.log(e.target.value);
//         } else if(e.target.value === "search by Type"){
//         console.log(e.target.value);
//         }
//          else if(e.target.value === "search by State"){
//             console.log(e.target.value);
//         }
//     }
//     ) 
// }
   
// const createSearchBar = (e)=> {
//     let searchBar = document.createElement("li")
//         searchBar.class = 'searching'
//         searchBar.innerHTML = `
//         <div class = 'content'>
        

//         `
//         document.body.appendChild(searchBar)
//     }

