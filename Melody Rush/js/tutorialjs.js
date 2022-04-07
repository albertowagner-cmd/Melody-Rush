$(document).ready(function(){
    var contDialoghi=0;
    var vetDialoghi=
    [
        "Ciao! Io sono la tua guida spirituale...",
        "Prima che cominci a giocare è necessario che io ti spieghi un pochino come funziona il tutto, non trovi?",
        "Durante la storia dovrai aiutare il protagonista a raggiungere il suo obiettivo, vedrai poi più dettagliatamente di cosa si tratta",
        "Per farlo dovrai completare una serie di sfide musicali che metteranno alla prova il tuo senso del ritmo...",
        "Li vedi quei tre pulsanti li in basso a sinistra? ",
        "Puoi azionarli premendo rispettivamente i tasti A S D della tua tastiera",
        "Dalla parte alta dello scermo scenderanno dei blocchetti a tempo di musica",
        "Il tuo scopo è premere il pulsante corrispondente ad ogni blocchetto nel momento in cui viene raggiunto",
        "Esattamente come vedi qui nel riquadro qui in basso",
        "Sembra semplice, non trovi anche tu?...",
        "Il numero di blocchetti che raccogli determinerà il tuo punteggio finale, quindi vedi di raccoglierne il più possibile, intesi?",
        "E' fondamentale che non tieni premuti i tasti, altrimenti il punteggio non ti verrà assegnato!",
        "Il mio lavoro qui è finito, divertiti su Melody Rush!",
    ];
    
    
    var vetParlanti=
    [
        "Guida Spirituale"
    ];

    //$("#primoDialogo").fadeIn(5000,function(){alert("faedin")});
    $("#skipDialoghi").click( function() 
    {
        
        $(".parlante").html(vetParlanti[contDialoghi]);
        $(".dialogo").html(vetDialoghi[contDialoghi]);
        contDialoghi++;
        
        
        if(contDialoghi == 5)
            $("#immagineTutorial").attr("src","../images/gif/gif1.gif");

        if(contDialoghi == 7)
            $("#immagineTutorial").attr("src","../images/gif/gif2.gif");

        if(contDialoghi == vetDialoghi.length)
            $("#skipDialoghi").html("Menù");

        if(contDialoghi == vetDialoghi.length+1)
          $(location).attr('href', 'index.html');


    });
    
});