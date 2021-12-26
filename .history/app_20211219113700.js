var titleText = ""

function timer() {
    //Countdown timer 
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

        const days = Math.floor(timeSpan / day)
        const hours = Math.floor((timeSpan % day) / hour)
        const minutes = Math.floor((timeSpan % hour) / minute)
        const seconds = Math.floor((timeSpan % minute) / second)

        timeLeft.innerHTML = days + " days " + hours + " hrs " + minutes + " min " + seconds + " seconds"

    }
    timerId = setInterval(countdown, second)
}

const test = document.getElementById('test')
test.innerHTML = ("Press enter to submit")

function setTitle(){
    titleText = document.getElementsByName("title")[0].value;
    console.log(titleText)
}

var form = document.getElementById('title');
console.log("Trying to delete")
form.style.display = 'none';

function hideForm(){
    var form = document.getElementById('title');
    console.log("Trying to delete")
    form.style.display = 'none';
}

