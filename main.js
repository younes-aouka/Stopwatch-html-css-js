const start = document.getElementsByClassName("start")[0] ;
const stop = document.getElementsByClassName("stop")[0] ;
const reset = document.getElementsByClassName("reset")[0] ;
const minute = document.getElementsByClassName("minutes")[0] ;
const seconde = document.getElementsByClassName("seconds")[0] ;

let timeCount = 0 ;
let minutesCount = 0 ;
let secondeCount = 0 ;
let Counting ;

inialisation();

function inialisation(){
    if(window.localStorage.getItem("timeCount")){
        timeCount = window.localStorage.getItem("timeCount");
        formatDate();
        printDate()
    }
}

start.addEventListener("click",function(){
    start.disabled= true;
    stop.disabled= false ;
    reset.disabled= false ;
    Counting = setInterval(function(){
        timeCount++ ;
        window.localStorage.setItem("timeCount",timeCount);
        formatDate();
        printDate();
    },1000);
});

stop.addEventListener("click",function(){
    clearInterval(Counting);
    start.disabled= false;
    stop.disabled= true ;

});

reset.addEventListener("click",function(){
    clearInterval(Counting);
    reset.disabled= true ;
    start.disabled= false;
    timeCount = 0 ;
    window.localStorage.setItem("timeCount",0);
    minutesCount = 0 ;
    minute.textContent = "00:"
    secondeCount = 0 ;
    seconde.textContent = "00"
});

function formatDate(){
    secondeCount = timeCount ;
    if(secondeCount > 59) secondeCount %= 60 ;
    minutesCount = parseInt(timeCount/60);
}

function printDate(){
    secondeCount >= 10 ? seconde.textContent = secondeCount: seconde.textContent = '0'+ secondeCount;
    minutesCount >= 10 ? minute.textContent = `${minutesCount}:`: minute.textContent = '0'+ minutesCount+":";
}

console.log("%c StopWatch","color:#f92672;font-size:24px;");

