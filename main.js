$(document).ready(
    function(){
        //-------------slider-----------------
        var imgpos=1;
         $(".slides li").hide();
         $(".slides li:first").show();
         $(".cercle li:first").css({'color':'rgba(124, 46, 46)'});
         $(".cercle li").click(
         function(){
             
             var position =$(this).index()+1;
             imgpos=position;
             $(".slides li").hide();
             $(".slides li:nth-child("+position+")").fadeIn();
             $(this).css({'color':'rgba(124, 46, 46)'});
             $(this).siblings().css({'color':''});
             
             
         });
         $(".right").click(
             function(){
                 imgpos++;
                 if(imgpos == 4){
                     imgpos=1;
                 }
                 $(".slides li").hide();
                 $(".slides li:nth-child("+imgpos+")").fadeIn();
                 $(".cercle li:nth-child("+imgpos+")").css({'color':'rgba(124, 46, 46)'});
                 $(".cercle li:nth-child("+imgpos+")").siblings().css({'color':''});
                 
                
         });
         $(".left").click(
             function(){
                 imgpos--;
                 if(imgpos == 0){
                     imgpos=3;
                 }
                 $(".slides li").hide();
                 $(".slides li:nth-child("+imgpos+")").fadeIn();
                 $(".cercle li:nth-child("+imgpos+")").css({'color':'rgba(124, 46, 46)'});
                 $(".cercle li:nth-child("+imgpos+")").siblings().css({'color':''});
                 
                
         });
        //----------OUJDA PRIERRE-----------
        var slide=1;
        $("#click").click(function(){
            
            $(this).next().slideToggle();
            if(slide ==1){
                slide=0;
                $("#ud").html("<i class='bi bi-chevron-compact-down'</i>");
            }
            else{
                slide=1;
                $("#ud").html("<i class='bi bi-chevron-compact-up'></i>");
            }
        });
        $.ajax({
            url:"https://api.pray.zone/v2/times/this_week.json?city=oujda",
            type:"get",
            success:function(s){
                //----LUNDI
                $("#l1").html(s.results.datetime[0].times.Fajr);
                $("#l2").html(s.results.datetime[0].times.Dhuhr);
                $("#l3").html(s.results.datetime[0].times.Asr);
                $("#l4").html(s.results.datetime[0].times.Maghrib);
                $("#l5").html(s.results.datetime[0].times.Isha);
                //----MARDI
                $("#m1").html(s.results.datetime[1].times.Fajr);
                $("#m2").html(s.results.datetime[1].times.Dhuhr);
                $("#m3").html(s.results.datetime[1].times.Asr);
                $("#m4").html(s.results.datetime[1].times.Maghrib);
                $("#m5").html(s.results.datetime[1].times.Isha);
                //----MERCREDI
                $("#me1").html(s.results.datetime[2].times.Fajr);
                $("#me2").html(s.results.datetime[2].times.Dhuhr);
                $("#me3").html(s.results.datetime[2].times.Asr);
                $("#me4").html(s.results.datetime[2].times.Maghrib);
                $("#me5").html(s.results.datetime[2].times.Isha);
                //----JEUDI
                $("#j1").html(s.results.datetime[3].times.Fajr);
                $("#j2").html(s.results.datetime[3].times.Dhuhr);
                $("#j3").html(s.results.datetime[3].times.Asr);
                $("#j4").html(s.results.datetime[3].times.Maghrib);
                $("#j5").html(s.results.datetime[3].times.Isha);
                //----VEBDREDI
                $("#v1").html(s.results.datetime[4].times.Fajr);
                $("#v2").html(s.results.datetime[4].times.Dhuhr);
                $("#v3").html(s.results.datetime[4].times.Asr);
                $("#v4").html(s.results.datetime[4].times.Maghrib);
                $("#v5").html(s.results.datetime[4].times.Isha);
                //----SAMEDI
                $("#s1").html(s.results.datetime[5].times.Fajr);
                $("#s2").html(s.results.datetime[5].times.Dhuhr);
                $("#s3").html(s.results.datetime[5].times.Asr);
                $("#s4").html(s.results.datetime[5].times.Maghrib);
                $("#s5").html(s.results.datetime[5].times.Isha);
                //----DIMANCE
                $("#d1").html(s.results.datetime[6].times.Fajr);
                $("#d2").html(s.results.datetime[6].times.Dhuhr);
                $("#d3").html(s.results.datetime[6].times.Asr);
                $("#d4").html(s.results.datetime[6].times.Maghrib);
                $("#d5").html(s.results.datetime[6].times.Isha);
                
            },
            beforeSend:function(){
             $("#ouj").hide();    
             $("#char").show();
             },
             complete:function(){
                 $("#char").hide();
                 $("#ouj").show();  
             },
        });
        //----------OUJDA METEO-----------
        
        $.ajax({
            url:"http://api.weatherapi.com/v1/current.json?key=1ba3a04707034d529fe113329221802&q=oujda&aqi=no",
            type:"get",
            success:function(b){
                 if(b.current.is_day == 1)
                 {
                     $("#oujda").css("background-image","url(omorning.JPG)");
                 }
                 if(b.current.is_day == 0)
                 {
                     $("#oujda").css("background-image","url(onight.JPG)");
                 }
                 $("#city").html(b.location.name);
                 $("#time").html(b.location.localtime);
                 
                 
                 $("#icon").attr('src',"http:"+b.current.condition.icon);
                 $("#tempc").html(b.current.temp_c +" °C");

            },
        });

        //-----------------------rabat-----------------------
        //----------rabat prierre---------------
        var slide1=1;
        $("#rclick").click(function(){
           
           $(this).next().slideToggle();
           if(slide1 ==1){
                slide1=0;
                $("#ud1").html("<i class='bi bi-chevron-compact-down'</i>");
            }
            else{
                 slide1=1;
                 $("#ud1").html("<i class='bi bi-chevron-compact-up'></i>");
            }
           
          });
        $.ajax({
            url:"https://api.pray.zone/v2/times/this_week.json?city=rabat",
            type:"get",
            success:function(rabat){
                //----LUNDI
                $("#rl1").html(rabat.results.datetime[0].times.Fajr);
                $("#rl2").html(rabat.results.datetime[0].times.Dhuhr);
                $("#rl3").html(rabat.results.datetime[0].times.Asr);
                $("#rl4").html(rabat.results.datetime[0].times.Maghrib);
                $("#rl5").html(rabat.results.datetime[0].times.Isha);
                //----MARDI
                $("#rm1").html(rabat.results.datetime[1].times.Fajr);
                $("#rm2").html(rabat.results.datetime[1].times.Dhuhr);
                $("#rm3").html(rabat.results.datetime[1].times.Asr);
                $("#rm4").html(rabat.results.datetime[1].times.Maghrib);
                $("#rm5").html(rabat.results.datetime[1].times.Isha);
                //----MERCREDI
                $("#rme1").html(rabat.results.datetime[2].times.Fajr);
                $("#rme2").html(rabat.results.datetime[2].times.Dhuhr);
                $("#rme3").html(rabat.results.datetime[2].times.Asr);
                $("#rme4").html(rabat.results.datetime[2].times.Maghrib);
                $("#rme5").html(rabat.results.datetime[2].times.Isha);
                //----JEUDI
                $("#rj1").html(rabat.results.datetime[3].times.Fajr);
                $("#rj2").html(rabat.results.datetime[3].times.Dhuhr);
                $("#rj3").html(rabat.results.datetime[3].times.Asr);
                $("#rj4").html(rabat.results.datetime[3].times.Maghrib);
                $("#rj5").html(rabat.results.datetime[3].times.Isha);
                //----VEBDREDI
                $("#rv1").html(rabat.results.datetime[4].times.Fajr);
                $("#rv2").html(rabat.results.datetime[4].times.Dhuhr);
                $("#rv3").html(rabat.results.datetime[4].times.Asr);
                $("#rv4").html(rabat.results.datetime[4].times.Maghrib);
                $("#rv5").html(rabat.results.datetime[4].times.Isha);
                //----SAMEDI
                $("#rs1").html(rabat.results.datetime[5].times.Fajr);
                $("#rs2").html(rabat.results.datetime[5].times.Dhuhr);
                $("#rs3").html(rabat.results.datetime[5].times.Asr);
                $("#rs4").html(rabat.results.datetime[5].times.Maghrib);
                $("#rs5").html(rabat.results.datetime[5].times.Isha);
                //----DIMANCE
                $("#rd1").html(rabat.results.datetime[6].times.Fajr);
                $("#rd2").html(rabat.results.datetime[6].times.Dhuhr);
                $("#rd3").html(rabat.results.datetime[6].times.Asr);
                $("#rd4").html(rabat.results.datetime[6].times.Maghrib);
                $("#rd5").html(rabat.results.datetime[6].times.Isha);
                
            },
            beforeSend:function(){
             $("#raba").hide();    
             $("#char1").show();
             },
             complete:function(){
                 $("#char1").hide();
                 $("#raba").show();  
             },
        });
        //----------rabat METEO-----------
        $.ajax({
            url:"http://api.weatherapi.com/v1/current.json?key=1ba3a04707034d529fe113329221802&q=rabat&aqi=no",
            type:"get",
            success:function(c){
                 if(c.current.is_day == 1)
                 {
                     $("#rabat").css("background-image","url(rmorning.JPG)");
                 }
                 if(c.current.is_day == 0)
                 {
                     $("#rabat").css("background-image","url(rnight.JPG)");
                 }
                 $("#rcity").html(c.location.name);
                 $("#rtime").html(c.location.localtime);
                 
                 
                 $("#ricon").attr('src',"http:"+c.current.condition.icon);
                 $("#rtempc").html(c.current.temp_c +" °C");

            },
        });
        
        //-----------------------casa-----------------------
        //----------casa prierre---------------
        var slide2=1;
        $("#mclick").click(function(){
           
           $(this).next().slideToggle();
           if(slide2 ==1){
            slide2=0;
            $("#ud2").html("<i class='bi bi-chevron-compact-down'</i>");
        }
        else{
             slide2=1;
             $("#ud2").html("<i class='bi bi-chevron-compact-up'></i>");
        }
          });
        $.ajax({
            url:"https://api.pray.zone/v2/times/this_week.json?city=casa-blanca",
            type:"get",
            success:function(casa){
                //----LUNDI
                $("#ml1").html(casa.results.datetime[0].times.Fajr);
                $("#ml2").html(casa.results.datetime[0].times.Dhuhr);
                $("#ml3").html(casa.results.datetime[0].times.Asr);
                $("#ml4").html(casa.results.datetime[0].times.Maghrib);
                $("#ml5").html(casa.results.datetime[0].times.Isha);
                //----MARDI
                $("#mm1").html(casa.results.datetime[1].times.Fajr);
                $("#mm2").html(casa.results.datetime[1].times.Dhuhr);
                $("#mm3").html(casa.results.datetime[1].times.Asr);
                $("#mm4").html(casa.results.datetime[1].times.Maghrib);
                $("#mm5").html(casa.results.datetime[1].times.Isha);
                //----MERCREDI
                $("#mme1").html(casa.results.datetime[2].times.Fajr);
                $("#mme2").html(casa.results.datetime[2].times.Dhuhr);
                $("#mme3").html(casa.results.datetime[2].times.Asr);
                $("#mme4").html(casa.results.datetime[2].times.Maghrib);
                $("#mme5").html(casa.results.datetime[2].times.Isha);
                //----JEUDI
                $("#mj1").html(casa.results.datetime[3].times.Fajr);
                $("#mj2").html(casa.results.datetime[3].times.Dhuhr);
                $("#mj3").html(casa.results.datetime[3].times.Asr);
                $("#mj4").html(casa.results.datetime[3].times.Maghrib);
                $("#mj5").html(casa.results.datetime[3].times.Isha);
                //----VEBDREDI
                $("#mv1").html(casa.results.datetime[4].times.Fajr);
                $("#mv2").html(casa.results.datetime[4].times.Dhuhr);
                $("#mv3").html(casa.results.datetime[4].times.Asr);
                $("#mv4").html(casa.results.datetime[4].times.Maghrib);
                $("#mv5").html(casa.results.datetime[4].times.Isha);
                //----SAMEDI
                $("#ms1").html(casa.results.datetime[5].times.Fajr);
                $("#ms2").html(casa.results.datetime[5].times.Dhuhr);
                $("#ms3").html(casa.results.datetime[5].times.Asr);
                $("#ms4").html(casa.results.datetime[5].times.Maghrib);
                $("#ms5").html(casa.results.datetime[5].times.Isha);
                //----DIMANCE
                $("#md1").html(casa.results.datetime[6].times.Fajr);
                $("#md2").html(casa.results.datetime[6].times.Dhuhr);
                $("#md3").html(casa.results.datetime[6].times.Asr);
                $("#md4").html(casa.results.datetime[6].times.Maghrib);
                $("#md5").html(casa.results.datetime[6].times.Isha);
                
            },
            beforeSend:function(){
             $("#casa").hide();    
             $("#char2").show();
             },
             complete:function(){
                 $("#char2").hide();
                 $("#casa").show();  
             },
        });
        //----------casa METEO-----------
        $.ajax({
            url:"http://api.weatherapi.com/v1/current.json?key=1ba3a04707034d529fe113329221802&q=casablanca&aqi=no",
            type:"get",
            success:function(d){
                 if(d.current.is_day == 1)
                 {
                     $("#casabl").css("background-image","url(mmorning.JPG)");
                 }
                 if(d.current.is_day == 0)
                 {
                     $("#casabl").css("background-image","url(mnight.JPG)");
                 }
                 $("#mcity").html(d.location.name);
                 $("#mtime").html(d.location.localtime);
                 
                 
                 $("#micon").attr('src',"http:"+d.current.condition.icon);
                 $("#mtempc").html(d.current.temp_c +" °C");

            },
        });
    }
);