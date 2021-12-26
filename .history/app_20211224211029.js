var titleText = ""
var month = ""
var day = ""
var year = ""

let months = {
    'jan':'1',
    'feb':'2',
    'mar':'3',
    'apr':'4',
    'may':'5',
    'jun':'6',
    'jul':'7',
    'aug':'8',
    'sep':'9',
    'oct':'10',
    'nov':'11',
    'dec':'12',
};

function isNum(val){
    return !isNaN(val)
  }

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

const desc = document.getElementById('title-desc')
desc.innerHTML = ("Press enter to submit")

function setTitle(){
    titleText = document.getElementsByName("title")[0].value;
    console.log(titleText)
}

function hideForm(){
    var hideMe = document.getElementById('title-text');
    console.log("Trying to delete")
    hideMe.style.display = 'none';
    desc.style.display = 'none'
    var monthText = document.getElementById('month-text')
    monthText.style.visibility = 'visible'
}

function setDate(){
    date = document.getElementsByName("month")[0].value;
    date = date.toLowerCase()

    if (isNum(date.charAt(0))


}

function hideMonth(){
    hideMe = document.getElementById('month-text');
    console.log("Trying to delete")
    hideMe.style.display = 'none';
    setDate()
}
