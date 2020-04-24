window.onload = function(){


// variables

const wieghtInput = document.querySelector("#tell-me-your-weight-input");
//const buttonCalculate = document.querySelector("#button-calculate");
const result = document.querySelector("#result-ppm");
const gor = document.querySelector("#personal-activity-table");
const goUp = document.querySelector("#go-up");
const bodyBody = document.querySelector("#body");
const topNav = document.querySelector("#top-nav");












// events

//buttonCalculate.addEventListener("click", calculate);
gor.addEventListener("click", myNum);
goUp.addEventListener("click", goUpGo);




// funtions



function goUpGo(){



console.log(bodyBody.offsetTop);
console.log(topNav.offsetTop);

bodyBody.classList.toggle("animate");

function doItNow(){
    window.scrollTo(0, 0);
}


doItNow();





  


}




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










