window.onload = function(){


// variables

const wieghtInput = document.querySelector("#tell-me-your-weight-input");
//const buttonCalculate = document.querySelector("#button-calculate");
const result = document.querySelector("#result-ppm");
const gor = document.querySelector("#personal-activity-table");











// events

//buttonCalculate.addEventListener("click", calculate);
gor.addEventListener("click", myNum);


// funtions

    function myNum(e){

        event.preventDefault();
       
        const x = 1;
        const y = 24;
        const w = wieghtInput.value;
        const item = e.target;
        const val = item.value;
     
 
           
            result.innerHTML = val * x * y * w + '<span> kcal</span>';
        
        
    }

    
   



    



    

 

}










