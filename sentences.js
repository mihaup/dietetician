window.onload = function(){


    const table = ["Ten Kto jest w pelni przygotowany i czeka na nieprzygotowanego odniesie zwyciestwo. Sun Tzu", 
    "Zarowno bycie wscibskim, jak i zbytnie angazowanie sie w sprawy innych, wypala psychicznie i nie sluzy zadnej ze stron. Zyj i daj zyc innym", 
    "Predkosc Cie zabije. Bedziesz musial zaplacic za nienaturalna szybkosc zalawiania roznych spraw",
    "Proste prawo zachowania energii przestanie obowiazywac. Nie mozesz pedzic i jednoczesnie byc skutecznym, mozesz jedynie byc wydajnym",
    "Aby dany proces przebiegal wlasciwie,powinienes usiasc, wysluchac innych i zastanowic sie nad nim.",
    "Zatrzymaj sie, poddaj wszystko analizie i sporzadz plan dzialania.",
    "Znalezienie tempa oznacza celowosc dzialania i skupienie uwagi"];

    const tableLength = table.length;

    //const div = document.createElement(div);

    setTimeout(sentences,100);


    function sentences(){


        const welcome = document.querySelector("#welcome").childNodes;


    setTimeout(opaZero,1000);

    function opaZero(){
        welcome[1].classList.add("smooth-opacity-zero");
    }
        
        
        
        



        setTimeout(opaOne,1500);

        function opaOne(){
            welcome[1].classList.add("smooth-opacity-one");
            welcome[1].innerHTML = (table[this.Math.floor(Math.random()*tableLength)]);
        }
           

    }

    
        
        
        
        //welcome[1].style.opacity = "1";

    


   






}

