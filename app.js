



var startstop = 00;

function startStop() { /* Toggle StartStop */

  startstop = startstop +1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 00;
    stop();
  }

}






var min = 00;
var sec = 00;
var msec = 00;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >=100){
        sec++
        secHeading.innerHTML = sec
        msec = 00;
    } else if (sec>=60){
        min++
        sec = 00
        minHeading.innerHTML = min
    }
}

function start(){ 
interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
     min = 00;
     sec = 00;
     msec = 00;
 minHeading.innerHTML= min
 secHeading.innerHTML= sec
 msecHeading.innerHTML= msec
}