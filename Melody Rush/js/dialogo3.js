$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "Ciao Mia, il professore è appena entrato in aula ma la campanella non è ancora suonata, puoi ancora entrare in tempo!",
        "Ottimo, se faccio una corsa non arriverò in ritardo...",
        "Diciamo solo che non si potrebbe correre per i corridoi, ma per questa volta posso chiudere un occhio.",
        "Ti ringrazio! Ora devo scappare, buona giornata.",
        
    ];
    
    
    var vetParlanti=
    [
        "Bidello",
        "Mia",
        "Bidello",
        "Mia",
 
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
          $(location).attr('href', 'livello3.html');


    });
    
});