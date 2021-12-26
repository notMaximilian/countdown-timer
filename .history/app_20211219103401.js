const titleText

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

function ajaxget () {
    // (A) GET FORM DATA
    var form = new FormData(document.getElementById("myForm"));
    var data = new URLSearchParams(form).toString();
   
    // (B) AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "0-dummy.php?" + data);
    // What to do when server responds
    xhr.onload = function () { console.log(this.response); };
    xhr.send();
   
    // (C) PREVENT HTML FORM SUBMIT
    return false;
}

var input = document.getElementById("timer-text")
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("submit").click()
    }
});

