//figure out how to push to alternate branches 

const container = document.querySelector(".container");
//function for changing grid 

function changeGrid(){

    //gets input from the textfield next to the button. 
    let input = document.querySelector("#gridInput"); 
    let inputValue = input.value; 

    for(let i =0; i<inputValue; i++){
        //creating new flex container 
        let newFlex = document.createElement("div"); 
        newFlex.classList.add("flex-container-1"); 
        newFlex.style.display = "flex"; 
        newFlex.style.width = "956px"; 
        newFlex.style.height = "956px"; 
        newFlex.style.flexDirection = "row"; 
    
        console.log("hello"); 
        container.appendChild(newFlex); 
    
    
        for(let j =0; j<inputValue; j++){

            let placeHolder = 956/inputValue + "px"; 
            let newDiv = document.createElement("div"); 
            newDiv.classList.add("subitem")
            newDiv.style.backgroundColor = "gray";
            newDiv.style.height = placeHolder;  
            newDiv.style.width = placeHolder; 
            newDiv.style.flex = "auto";
            newDiv.addEventListener("mouseover", function(event) {
                event.target.style.backgroundColor = 'red'; 
            });
            
    
            newFlex.appendChild(newDiv); 
    
    
    
    
        }
    }
    if(inputValue> 100){
        alert("Please input another value"); 
    }
    else{
        alert(inputValue);

        //create grid of new size

    }
}
//creating button

const btn = document.querySelector("#btn");

btn.style.backgroundColor = 'red'; 
btn.style.color = 'white'; 
btn.addEventListener("click", function(event){

    changeGrid(); 

}); 

//creating 16x16 array

/*for(let i =0; i<16; i++){
    //creating new flex container 
    let newFlex = document.createElement("div"); 
    newFlex.classList.add("flex-container-1"); 
    newFlex.style.display = "flex"; 
    newFlex.style.width = "956px"; 
    newFlex.style.height = "956px"; 
    newFlex.style.flexDirection = "row"; 

    console.log("hello"); 
    container.appendChild(newFlex); 


    for(let j =0; j<16; j++){
        let newDiv = document.createElement("div"); 
        newDiv.classList.add("subitem")
        newDiv.style.backgroundColor = "gray";
        newDiv.style.height = "50px";  
        newDiv.style.width = "50px"; 
        newDiv.style.flex = "auto";
        newDiv.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = 'red'; 
        });


        newFlex.appendChild(newDiv); 




    }
}*/

const btn2 = document.querySelector("#btn2"); 
btn2.addEventListener("click",function(event){
    alert("Whow!"); 
    container.removeChild(newFlex); 

} )




