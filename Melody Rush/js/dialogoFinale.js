$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "Buongiorno Mia, appena in tempo! Stavo per cominciare a fare l'appello!",
        "Buongiorno Professore, mi vado subito a sedere.",
    ];
    
    
    var vetParlanti=
    [
        "Professore",
        "Mia"
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
        {
            $("#skipDialoghi").width("7vw");
            $("#skipDialoghi").html("Torna al menù");
        }

        if(contDialoghi == vetDialoghi.length+1)
          $(location).attr('href', 'index.html');


    });
    
});