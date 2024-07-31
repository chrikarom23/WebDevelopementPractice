const startStopBtn = document.getElementById("ssb");
const reset = document.getElementById("re");
let minutes = 0;
let seconds = 0;
let millis = 0;
let flag = false;


startStopBtn.addEventListener("click",starStop);

function starStop(){
    if(!flag){
        flag = true;
        testInterval = setInterval(updateTime, 10);
        startStopBtn.textContent="Pause";
    }
    else{
        pause();
    }
}

function updateTime(){
    millis++;

    if(millis==100){
        millis=0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes = 0;
            }
        }
    }

    displayTime();
}

function displayTime(){
    const timer = document.getElementById("timer");
    const curtime = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(millis).padStart(2,'0')}`;
    timer.textContent = curtime;
}

function pause(){
    clearInterval(testInterval);
    flag = false;
    startStopBtn.textContent="Start";
}

reset.addEventListener("click", () => {
    pause()
    minutes = 0;
    seconds = 0;
    millis = 0;
    displayTime();
})
displayTime();