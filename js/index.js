"use strict";
var seconds = "00";
var tens = "00";
var mins ="00";
var outputMins = document.getElementById("mins");
var outputSecs = document.getElementById("seconds");
var outputTens = document.getElementById("tens");
var startBtn = document.getElementById("startbtn");
var stopBtn = document.getElementById("stopbtn");
var resetBtn = document.getElementById("resetbtn");
var Interval;
var startTime;
startBtn.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

stopBtn.addEventListener("click", () =>{
    clearInterval(Interval);
});

resetBtn.addEventListener('click', () =>{
    clearInterval(Interval);
    seconds = "00";
    tens = "00";
    mins = "00";
    outputMins.innerText = mins;
    outputSecs.innerText = seconds;
    outputTens.innerText =tens;
});

  startTime = () =>{
        if(seconds >= 60){
        mins++
        outputMins.innerText = "0" + mins;
        seconds = 0;
        outputSecs.innerText = "0" + seconds;
    }
      tens++;
      if(tens <= 9){
          outputTens.innerText = "0" + tens;
      }
       if(tens > 9){
          outputTens.innerText = tens;
      }
      if(tens > 99){
          seconds++;
          outputSecs.innerText = "0" + seconds;
         tens = 0;
          outputTens.innerText = "0" + tens;
      }
    if(seconds > 9){
          outputSecs.innerText = seconds;
      }
  }
