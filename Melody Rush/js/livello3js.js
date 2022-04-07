
$(document).ready(function()
{

    var contaBlocchetti=0;
    var contBlocchiGiocati=0;
    var flagBtn1;
    var flagBtn2;
    var flagBtn3;
    var punteggio=0;
    var contMiss=0;
    var blocchettiTotaliStage=410;
    
    localStorage.setItem('livelloCorrente', 2);

    
    

    var track = $('#canzone')[0];
     $("#pronto").click(giocone);
     function giocone() 
    {
        $("#prontoAGiocare").remove();
         

        $(document).keydown(function(e)
        {
                    
            if(e.key == "a")
            {
                $("#pulsante1").animate({backgroundColor: 'black'},70 );
                flagBtn1=true;
                setTimeout(function()
                {
                    $("#pulsante1").animate({backgroundColor: 'rgb(142, 41, 214)'},100 );
                    flagBtn1=false;
                }
                ,100 );
                        
            }
            
        
            if(e.key == "s")
            {
                $("#pulsante2").animate({backgroundColor: 'black'},70 );
                flagBtn2=true;
                setTimeout(function()
                {
                    $("#pulsante2").animate({backgroundColor: 'rgb(142, 41, 214)'},100);
                    flagBtn2=false;
                }
                ,100 );
            }
            
        
            if(e.key == "d")
            {
                $("#pulsante3").animate({backgroundColor: 'black'},70 );
                flagBtn3=true;
                setTimeout(function()
                {
                    $("#pulsante3").animate({backgroundColor: 'rgb(142, 41, 214)'},100 );
                    flagBtn3=false;
                }
                ,100 );
                
            }
        
            });
            
            
        
            
        

            function resettaPulsante(pulsanteCorrente,flagCorrente)
            {
                flagCorrente=false;
                pulsanteCorrente.animate({backgroundColor: 'rgb(142, 41, 214)'},100 );
                
            }

            
            var stage=setInterval(creazione,312);
            

        function creazione()
        {
            
            bloccoScelto=parseInt(Math.random()*3+1);
            
            

            contaBlocchetti++;

            if(bloccoScelto == 1)
                    $("#colonna"+bloccoScelto).append("<div class='blocchetto b1'> &nbsp </div>");
                
            if(bloccoScelto == 2)     
                    $("#colonna"+bloccoScelto).append("<div class='blocchetto b2'> &nbsp </div>");
            
            if(bloccoScelto == 3) 
                    $("#colonna"+bloccoScelto).append("<div class='blocchetto b3'> &nbsp</div>");
                
            

            
            $(".blocchetto").animate({bottom:'0px'},5000,"linear");
            
            
        }

        setInterval(tick,10);
        
        function tick()
        {
            if(contaBlocchetti == blocchettiTotaliStage)
                clearInterval(stage);
            controlloFineGioco();

            var posizioneTasti = $("#pulsante1").position(); 
        


            var posizioneBarra = $("#barraIntercetto").position(); 
            
            for(var i=0;i<contaBlocchetti;i++)
            {
                var numeroBlocco;

                if( $(".blocchetto").eq(i).hasClass( "b1" ) )
                numeroBlocco=1;

                if( $(".blocchetto").eq(i).hasClass( "b2" ) )
                numeroBlocco=2;

                if( $(".blocchetto").eq(i).hasClass( "b3" ) )
                numeroBlocco=3;
                
                var posizioneBlocchetto = $(".blocchetto").eq(i).position();
                if(posizioneBlocchetto != null)
                {
                        var posTop=posizioneBlocchetto.top;

                        if( posTop  > posizioneBarra.top )
                    {
                        
                        cancellaBlocco(i);
                        contMiss++;
                    //console.log("distrutto");
                    }

                    if( posTop  > posizioneTasti.top && posTop  < posizioneTasti.top+30   )
                    {
                        track.play();
                        console.log(flagBtn1);
                                
                        if(numeroBlocco==1 && flagBtn1)
                        { 
                            punteggio++;
                            $("#punteggio").html(punteggio);
                            cancellaBlocco(i);
                        }

                        if(numeroBlocco==2 && flagBtn2)
                        {
                            //console.log("punto");
                            punteggio++;
                            $("#punteggio").html(punteggio);
                            cancellaBlocco(i);
                        }

                        if(numeroBlocco==3 && flagBtn3)
                        {
                            //console.log("punto");
                            punteggio++;
                            $("#punteggio").html(punteggio);
                            cancellaBlocco(i);
                        }
                        
                    }
                }
               

                
                
                //console.log( posizioneBlocchetto.top );
                //console.log(posTop);

                

                cancellaBlocco= function(i)
                {
                
                    $(".blocchetto").eq(i).remove();
                }

            

                
            }
    
            
        }

        function controlloFineGioco()
        {
            if(contMiss+punteggio == blocchettiTotaliStage)
            {
                //alert("Stage terminato! Hai totalizzato "+punteggio+" punti!");
                var punteggioParziale=parseInt(localStorage.getItem('punteggio'));
                var punteggioFinale=punteggioParziale+punteggio;

                localStorage.setItem('punteggio', punteggioFinale);
                clearInterval(stage);
                clearInterval(tick);
                $(".blocchetto").remove();
                //se non arrivo dal menu freestyle proseguo con la storia
                if( localStorage.getItem('arrivatoDaFreestyle') == 'false')    
                    $(location).attr('href', 'finale.html');
                else
                    $(location).attr('href', 'index.html');
                
            }
        }

        



    }  
                

});