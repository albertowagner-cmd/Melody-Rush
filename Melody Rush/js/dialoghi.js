$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "I ferri sono il padre selcioso di una serie proibita e di certo non è colpa della crisi.",
        "Andreas e Vittoria cucinano le intenzioni consentite e attorno io soccombevo gli aghi appenninici.",
        "Il genitore è tra le botti documentabili delle carte aliene ma qualcuno dissente.",
        "Il lardo è tra i lupi torridi di un cambio trasformista naturalmente è un eufemismo.",
        "Io riesamino gli ignoti supini infine noi organizziamo le danze velistiche.  ",
    ];
    
    
    var vetParlanti=
    [
        "Antonio",
        "Gennaro",
        "Antonio",
        "Gennaro",
        "Antonio"
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

    });
    
});