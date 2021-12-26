const timeLeft = document.getElementById('time-left')
let timerId;
//Units of time
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const christmas = new Date('12/25/2021')

function countdown(){
    const today = new Date();
    const timeSpan = christmas - today;

    if(timeSpan <= -day){
        timeLeft.innerHTML("I hope you had a Merry Christmas!!!")
        clearInterval(timerId)
        return
    }
    
    if (timeSpan <= 0){
        timeLeft.innerHTML("Merry Christmas!!!")
        clearInterval(timerId)
        return
    }

    const hours = Math.floor((timeSpan % days) / hour)
    const days = Math.floor(timeSpan / day)

}

timerId = setInterval(countdown, second)