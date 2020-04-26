//window.onload = function(){
    



//const vegList = document.querySelector("#veg-list");

const inputValue = document.querySelector(".chooseMe");



const content = document.querySelector(".content");











inputValue.addEventListener("click", addMe, false);






function addMe(event){

    event.preventDefault;


    //const allCheck = document.querySelectorAll(".chooseMe");

    //allCheck.forEach(function(boom){

   // });

        const newElement = document.createElement("p");
        const remove = document.createElement("i");
       

        

        const item = event.target;
        const val = item.value;
        
        
      
      

       

        remove.classList.add("margin");
    
        remove.innerHTML = "-";
        newElement.innerHTML = val;
        
        newElement.insertBefore(remove, newElement.childNodes[0]);
    
        
    
        

      
        
    
     

        console.log(1);
       
        content.appendChild(newElement);

    
       
        remove.addEventListener("click", remover);
        
       
                  
               
                
                
    
                item.checked = true;
                item.classList.toggle("no-events");

        
        
    
     
    
           
       

            function remover(e)
            {
                
                content.remove(this.newElement);
                item.checked = false;
                item.classList.remove("no-events"); 

                
                

               
        
            }

        
    
       
    
        
            
    
        



   

  
}
   


   
        
}
        

