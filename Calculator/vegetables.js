window.onload = function(){




//variables

const btnAsparagus = document.querySelector("#asparagus-button");
const btnAubergine = document.querySelector("#aubergine-button");
const content = document.querySelector(".content");



//events

btnAsparagus.addEventListener("click", addMe,true);
btnAubergine.addEventListener("click",addMe,true);






//functions

function addMe(e){

    const target = e.target;

    const newElement = document.createElement("p");
    const remove = document.createElement("i");
    target.classList.add("choosen");
    const element = document.querySelector(".choosen").parentElement;

    var c = element.childNodes;

    c[0].checked = true;
    c[0].classList.add("no-events");

    console.log(c[2]);

    if (c[0].checked = true)
        
    {

        newElement.innerHTML = c[0].value;
        c[2].removeEventListener("click",addMe,true);

    }



  
    
   


    remove.innerHTML = "-";
    remove.classList.add("margin");

    newElement.appendChild(remove);

    content.appendChild(newElement);


    remove.addEventListener("click", remover);
    

    

    target.classList.remove("choosen");


    function remover()
    {
        newElement.remove();
        c[0].checked = false;
        c[2].addEventListener("click",addMe,true);


    }



}




}