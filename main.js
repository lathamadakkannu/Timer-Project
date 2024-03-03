var second=document.getElementById("second");
var minutes=document.getElementById("min");
var hour=document.getElementById("hour");
var timerstart=document.getElementById("start");
var timerstop=document.getElementById("stop");
var timerrestart=document.getElementById("reset");

var a=0;
var b=0;
var c=0;


timerstart.addEventListener("click",function(){
     ms=setInterval(timersec,1000);
   })

timerstop.addEventListener("click",function(){

    clearInterval(ms);
        
   })

timerrestart.addEventListener("click",function(){

    clearInterval(ms);
    a="00";
    b="00";
    c="00";
    second.innerHTML=a;
    minutes.innerHTML=b;
    hour.innerHTML=c;

    })


function timersec(){
    if (9>a){

         a++;
        second.innerHTML="0"+a;
       
    }

    else if (9<=a && a<59){
        a++;
        second.innerHTML=a;
        
    }
    

    else{
        clearInterval(second);
        a=0;
        if (9>b){

            b++;
           minutes.innerHTML="0"+b;
          
       }
   
       else if (9<=b && b<59){
           b++;
           minutes.innerHTML=b;
          
       }

        else{
            clearInterval(minutes);
            b=0;
            if (9>c){

                c++;
               hour.innerHTML="0"+c;
              
           }
       
           else if (9<=c && c<23){
               c++;
               hour.innerHTML=c;
               
           }
            else{
                clearInterval(hour);
                c=0;
        
            }
    
        }
    }
}