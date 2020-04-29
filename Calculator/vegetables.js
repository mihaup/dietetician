window.onload = function(){




//variables

const btnAsparagus = document.querySelector("#asparagus-button");
const btnAubergine = document.querySelector("#aubergine-button");
const btnBeetroot = document.querySelector("#beetroot-button");
const content = document.querySelector(".content");
const sumaHTML = document.querySelector(".suma");

const btnSuma = document.createElement("button");




const vegetablesList = [btnAsparagus, btnAubergine, btnBeetroot];

const sumaParagraph = document.createElement("input");
sumaParagraph.classList.add("suma-input");
const sumaHTMLchild = sumaHTML.childNodes;

const body = document.getElementsByName("body");


//events

vegetablesList.forEach(addEventHere); 
btnSuma.addEventListener("click", adder, true);

    
function addEventHere(index){

    index.addEventListener("click", addMe,true);
};


//btnAsparagus.addEventListener("click", addMe,true);
//btnAubergine.addEventListener("click",addMe,true);
//btnBeetroot.addEventListener("click", addMe, true);







//functions

function addMe(e){



    

    const target = e.target;

    const newElement = document.createElement("p");
    const removeBtn = document.createElement("i");
    target.classList.add("choosen");
    const element = document.querySelector(".choosen").parentElement;


  

    var c = element.childNodes;

    c[0].checked = true;
    c[0].classList.add("no-events");



    

    
    


    if (c[0].checked = true)
        
    {

        newElement.innerHTML = c[0].value;
        c[2].removeEventListener("click",addMe,true);

       

    }

    const asparagusSeasonLength = vegetables.asparagus.season.length;
    const kcalLength = vegetables.asparagus.kcal.length;
    const aubergineSeasonLength = vegetables.aubergine.season.length;
    const beetrootSeasonLength = vegetables.beetroot.season.length;

    


 


    const w = newElement.childNodes;
    //console.log(w);



    //console.log(c[0].value);
    const vegName = c[0].value;
    const vegNameLower = vegName.toLowerCase();

    const kcalSpan = document.createElement("span");
    const kcalInput = document.createElement("input");



    const quantitySpanWrapper = document.createElement("span");
    const quantitySpan = document.createElement("span");
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";

    quantitySpan.innerHTML = "Gram used: ";


    quantitySpanWrapper.appendChild(quantitySpan);
    quantitySpanWrapper.appendChild(quantityInput);

   


    

    if (vegNameLower === "asparagus"){


    for(i=0;i<asparagusSeasonLength + kcalLength + 1;i++) 
    {

    var div = document.createElement('span');
    div.classList.add("padding");
    newElement.appendChild(div);
    
    

    
        
    }

        

        w[1].innerHTML = vegetables.asparagus.season[0];
        w[2].innerHTML = vegetables.asparagus.season[1];
        w[3].innerHTML = vegetables.asparagus.season[2];

       
        
        

        kcalSpan.innerHTML = "22 kcal";


        kcalInput.type="checkbox";
        kcalInput.value = "22";
        kcalInput.classList.add("opacity-zero");
        
        
        
        w[4].appendChild(kcalSpan);
        w[5].appendChild(kcalInput);  
        w[5].appendChild(quantitySpanWrapper);

     
      
        
        
        quantitySpanWrapper.classList.add("asparagus-input");
        
       


        //console.log(sumaHTMLchild[1]);
        
        
        
        

        



    }

    
 
    if (vegNameLower === "aubergine"){


        for(i=0; i<aubergineSeasonLength+kcalLength+1; i++)
        {
    
        var div = document.createElement('span');
        div.classList.add("padding");
        newElement.appendChild(div);
    
        
            
        }

        w[1].innerHTML = vegetables.aubergine.season[0];
        w[2].innerHTML = vegetables.aubergine.season[1];
        w[3].innerHTML = vegetables.aubergine.season[2];
        w[4].innerHTML = vegetables.aubergine.season[3];
        w[5].innerHTML = vegetables.aubergine.season[4];


        kcalSpan.innerHTML = "22 kcal";


        kcalInput.type="checkbox";
        kcalInput.value = "22";
        kcalInput.classList.add("opacity-zero");
        
        
        
        
        w[6].appendChild(kcalSpan);
        w[7].appendChild(kcalInput);  
        w[7].appendChild(quantitySpanWrapper);


        quantitySpanWrapper.classList.add("aubergine-input");

    }


   
    
    if (vegNameLower === "beetroot"){


        for(i=0;i<beetrootSeasonLength+kcalLength+1;i++)
        {
    
        var div = document.createElement('span');
        div.classList.add("padding");
        newElement.appendChild(div);
    
        
            
        }

        w[1].innerHTML = vegetables.beetroot.season[0];
        w[2].innerHTML = vegetables.beetroot.season[1];
        w[3].innerHTML = vegetables.beetroot.season[2];
        w[4].innerHTML = vegetables.beetroot.season[3];
        w[5].innerHTML = vegetables.beetroot.season[4];
        w[6].innerHTML = vegetables.beetroot.season[5];


        
        kcalSpan.innerHTML = "22 kcal";


        kcalInput.type="checkbox";
        kcalInput.value = "22";
        kcalInput.classList.add("opacity-zero");
        
        
        
        w[7].appendChild(kcalSpan);
        w[8].appendChild(kcalInput); 
        w[8].appendChild(quantitySpanWrapper);



        quantitySpanWrapper.classList.add("beetroot-input");
        
        

    }
 

   
    

    



    removeBtn.innerHTML = "-";
    removeBtn.classList.add("margin");

    newElement.appendChild(removeBtn);

    content.appendChild(newElement);


    removeBtn.addEventListener("click", remover);
    
    
    

    


    function remover()
    {

        newElement.remove();
   
        c[0].checked = false;
        c[2].addEventListener("click",addMe,true);


    }

    
    
    
        sumaHTML.appendChild(btnSuma);
        btnSuma.type="submit";
        btnSuma.innerHTML = "Add All";
        sumaParagraph.type="number";
        sumaHTML.appendChild(sumaParagraph);


        

      

            

        

        

         
      

        target.classList.remove("choosen");
            
           
        
    }

   
    

    function adder(){

        const asparagusInput =   document.querySelector(".asparagus-input");
        const aubergineInput =   document.querySelector(".aubergine-input");
        const beetrootInput =   document.querySelector(".beetroot-input");
        const asparagusInputValue = asparagusInput.childNodes[1].value; 
        const aubergineInputValue = aubergineInput.childNodes[1].value; 
        const beetrootInputValue = beetrootInput.childNodes[1].value; 
        const sumaInput = document.querySelector(".suma-input");


        const valueList = [asparagusInputValue, aubergineInputValue, beetrootInputValue];
        const valueListLength = valueList.length;

       // for(i=0; i<valueListLength; i++){
            
            
        //}

        

          

        

        
            
            
           sumaInput.value = asparagusInputValue * aubergineInputValue * beetrootInputValue;
        
                    
       







}
   


}

    
    // button call to axtion - adding kcal


    







