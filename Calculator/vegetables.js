window.onload = function(){




//variables

const btnAsparagus = document.querySelector("#asparagus-button");
const btnAubergine = document.querySelector("#aubergine-button");
const btnBeetroot = document.querySelector("#beetroot-button");
const content = document.querySelector(".content");




//events

btnAsparagus.addEventListener("click", addMe,true);
btnAubergine.addEventListener("click",addMe,true);
btnBeetroot.addEventListener("click", addMe, true);







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
    const aubergineSeasonLength = vegetables.aubergine.season.length;
    const beetrootSeasonLength = vegetables.beetroot.season.length;
    


 


    const w = newElement.childNodes;
    console.log(w);



    console.log(c[0].value);
    const vegName = c[0].value;
    const vegNameLower = vegName.toLowerCase();

    

    if (vegNameLower === "asparagus"){


    for(i=0;i<asparagusSeasonLength;i++)
    {

    var div = document.createElement('span');
    div.classList.add("padding");
    newElement.appendChild(div);

    
        
    }

        w[1].innerHTML = vegetables.asparagus.season[0];
        w[2].innerHTML = vegetables.asparagus.season[1];
        w[3].innerHTML = vegetables.asparagus.season[2];

        



    }
 
    if (vegNameLower === "aubergine"){


        for(i=0;i<aubergineSeasonLength;i++)
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

    }



    
    if (vegNameLower === "beetroot"){


        for(i=0;i<beetrootSeasonLength;i++)
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
        

    }
 

   
    

    



    removeBtn.innerHTML = "-";
    removeBtn.classList.add("margin");

    newElement.appendChild(removeBtn);

    content.appendChild(newElement);


    removeBtn.addEventListener("click", remover);
    

    

    target.classList.remove("choosen");


    function remover()
    {
        newElement.remove();
        c[0].checked = false;
        c[2].addEventListener("click",addMe,true);


    }



}




}