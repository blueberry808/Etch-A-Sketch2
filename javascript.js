//figure out how to push to alternate branches 

const container = document.querySelector("container");



//these are children of the container class
const flex_1 = document.querySelector(".flex-container-1");
const flex_2 = document.querySelector(".flex-container-2");
const flex_3 = document.querySelector(".flex-container-3");
const flex_4 = document.querySelector(".flex-container-4");


//creating 16x16 array





for( let i = 0; i< 4; i++){

    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem")
    newDiv.id = "subitem1" + i;
    newDiv.style.backgroundColor = "gray";
    newDiv.style.height = "100px";  
    newDiv.style.width = "50px"; 
    newDiv.style.border = "5px solid blue"; 
    newDiv.style.flex = "auto"; 

    newDiv.
    //newDiv.addEventListener("mouseover", colorFunction(newDiv));


    flex_1.appendChild(newDiv);  
     
}

function colorFunction(newDiv)
{
    newDiv.style.backgroundColor = "blue";
}





for(let i =0; i<4; i++){
    console.log("flag 1"); 
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem"); 
    newDiv.style.backgroundColor = "gray"; 
    newDiv.style.height = "100px";  
    newDiv.style.width = "50px";
    newDiv.style.border = "5px solid blue"; 
    newDiv.style.flex = "auto"; 

    flex_2.appendChild(newDiv); 
}

for(let i =0; i<4; i++){
    console.log("flag 1"); 
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem"); 
    newDiv.style.backgroundColor = "gray"; 
    newDiv.style.height = "100px";  
    newDiv.style.width = "50px";
    newDiv.style.border = "5px solid blue"; 
    newDiv.style.flex = "auto"; 

    flex_3.appendChild(newDiv); 
}
for(let i =0; i<4; i++){
    console.log("flag 1"); 
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem"); 
    newDiv.style.backgroundColor = "gray"; 
    newDiv.style.height = "100px";  
    newDiv.style.width = "50px";
    newDiv.style.border = "5px solid blue"; 
    newDiv.style.flex = "auto"; 

    flex_4.appendChild(newDiv); 
}







/*for( let i = 0; i< 4; i++){
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem")
    newDiv.style.height = "50px";  
    newDiv.style.width = "50px"; 
    newDiv.style.border = "5px solid red"; 
    newDiv.style.flex = "auto"; 

    flex_2.appendChild(newDiv);  
     
}
for( let i = 0; i< 4; i++){
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem")
    newDiv.style.height = "50px";  
    newDiv.style.width = "50px"; 
    newDiv.style.border = "5 px solid red"; 
    newDiv.style.flex = "auto"; 

    flex_3.appendChild(newDiv);  
     
}
for( let i = 0; i< 4; i++){
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("subitem")
    newDiv.style.height = "50px";  
    newDiv.style.width = "50px"; 
    newDiv.style.border = "5 px solid red"; 
    newDiv.style.flex = "auto"; 

    flex_4.appendChild(newDiv);  
     
}*/