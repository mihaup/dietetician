window.onload = function(){


// variables

const wieghtInput = document.querySelector("#tell-me-your-weight-input");
const buttonCalculate = document.querySelector("#button-calculate");
const result = document.querySelector("#result-ppm");
const n = document.querySelector(".number");
const go = document.getElementById("#go");






// events

buttonCalculate.addEventListener("click", calculate);

n.addEventListener("click", numb);

// functions

function calculate(event){

    event.preventDefault();

    const x = 1;
    const y = 24;
    const w = wieghtInput.value;

    
  
    const yourAnswer = x * y * w;

    result.innerHTML = yourAnswer + '<span> kcal</span>';


    

}



function numb(e){

    const item = e.target;
    
    
   


    if (item.classList[0] === "number"){
       

        item.style.color = "red";
    }

  





   

}

}





