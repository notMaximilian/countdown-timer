const timeLeft = document.getElementById('time-left')

//Units of time
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const christmas = new Date('12/25/2021')

function countdown(){
    const today = new Date();
    const timeSpan = christmas - today;

    if (timeSpan <= 0){
        timeLeft.innerHTML("Merry Christmas!!!")
    }
}

const timerIDsetInterval(countdown, second)