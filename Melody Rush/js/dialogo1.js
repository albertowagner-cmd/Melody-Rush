$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "Mmm... che ore sono?",
        "Le 7:30???!!!!",
        "Cavoli, la sveglia non ha suonato!...",
        "Non posso permettermi di arrivare in ritardo anche oggi, il professore mi ucciderà!",
        "Devo darmi una mossa, ogni secondo è prezioso!",
        "Senza dubbio non posso saltare la colazione... ma devo fare in fretta",
        "Presto! In cucina!"
    ];
    
    
    var vetParlanti=
    [
        "Mia"
    ];

    //$("#primoDialogo").fadeIn(5000,function(){alert("faedin")});
    $("#skipDialoghi").click( function() 
    {
        
        $(".parlante").html(vetParlanti[contDialoghi]);
        $(".dialogo").html(vetDialoghi[contDialoghi]);
        contDialoghi++;
        /*
        if(contDialoghi%2==0)
        {
            $("#tipaSinistra").css("transform", "translate(0,-2vw)");
            $("#tipaDestra").css("transform", "translate(0,2vw)");
        }
        else
        {
            $("#tipaDestra").css("transform", "translate(0,-2vw)");
            $("#tipaSinistra").css("transform", "translate(0,2vw)");
        }*/

        if(contDialoghi == vetDialoghi.length)
            $("#skipDialoghi").html("Gioca");

        if(contDialoghi == vetDialoghi.length+1)
          $(location).attr('href', 'livello1.html');


    });
    
});