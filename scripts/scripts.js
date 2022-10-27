let delay = Math.random(), idealTime = 0, resultArr = [], i = 0, flag = 0, ban = 0, startTimeAfterReset = 0;
let timeout = setTimeout(calculatingIdealTime, delay * 4000 + 1000);

function calculatingIdealTime() {
    document.getElementById("buttonStart").style.backgroundColor="rgb(127, 255, 0)";
    document.getElementById("clickMeTxt").innerHTML="press!!";
    idealTime = Date.now();
}

function catchVillain() {
    i += 1;
    if((Date.now() - idealTime) < 1) flag = 228;
    if(flag > 0 || i > 0) clearTimeout(timeout);  
}

function outputOfResults(time, delayChange) {
    document.getElementById("secondsValue").innerHTML = (time + delayChange) + "ms";
    resultArr.push(time + delayChange);
    resultArr.sort(function(a, b) {return a - b;});
    document.getElementById("best").innerHTML = "best result: " + resultArr[0] + "ms";
    if(resultArr.length > 1) document.getElementById("top2").innerHTML = "top 2: " + resultArr[1] + "ms";
    if(resultArr.length > 2) document.getElementById("top3").innerHTML = "top 3: " + resultArr[2] + "ms";
}

function start() {
    let timeLocal = Date.now() - idealTime;
    if((timeLocal) < 25) outputOfResults(timeLocal, 150);
    else if((timeLocal) < 50) outputOfResults(timeLocal, 125);
    else if((timeLocal) < 75) outputOfResults(timeLocal, 100);
    else if((timeLocal) < 100) outputOfResults(timeLocal, 75);
    else if((timeLocal) < 125) outputOfResults(timeLocal, 50);
    else if((timeLocal) < 150) outputOfResults(timeLocal, 25);
    else if ((timeLocal) > 1000000 || i > 0) document.getElementById("secondsValue").innerHTML = "where are you hurrying??";
    else outputOfResults(timeLocal, 0);
     
}    

function reset() {
    delay = Math.random();
    i = 0, idealTime = 0;
    startTimeAfterReset = Date.now();
    document.getElementById("buttonStart").style.backgroundColor="rgb(255, 0, 34)";
    document.getElementById("clickMeTxt").innerHTML="click when i turn green";
    document.getElementById("secondsValue").innerHTML = "";
    timeout = setTimeout(calculatingIdealTime, delay * 4000 + 1000);  
}

