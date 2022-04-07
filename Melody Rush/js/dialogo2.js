$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "Buongiorno Mia!",
        "Ciao Luna! Sei anche tu in ritardo per la scuola?",
        "Oh io no, oggi c'è un assemblea di classe. Piuttosto, avrei bisogno che mi accompagnassi in posta, non ti scoccia vero?",
        "Beh diciamo che sono molto in ritardo, ma se siamo abbastanza veloci va bene! Ad un amica non si dice mai di no. ",
        "Ti prometto che sarà velocissimo, forza andiamo!"
    ];
    
    
    var vetParlanti=
    [
        "???",
        "Mia",
        "Luna",
        "Mia",
        "Luna"
    ];

    //$("#primoDialogo").fadeIn(5000,function(){alert("faedin")});
    $("#skipDialoghi").click( function() 
    {
        
        $(".parlante").html(vetParlanti[contDialoghi]);
        $(".dialogo").html(vetDialoghi[contDialoghi]);
        contDialoghi++;
        

        if(contDialoghi%2==0)
        {
            $("#tipaSinistra").css("transform", "translate(0,-2vw)");
            $("#tipaDestra").css("transform", "translate(0,2vw)");
        }
        else
        {
            $("#tipaDestra").css("transform", "translate(0,-2vw)");
            $("#tipaSinistra").css("transform", "translate(0,2vw)");
        }

        if(contDialoghi == vetDialoghi.length)
            $("#skipDialoghi").html("Gioca");

        if(contDialoghi == vetDialoghi.length+1)
          $(location).attr('href', 'livello2.html');


    });
    
});