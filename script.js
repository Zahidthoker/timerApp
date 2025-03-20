const input = document.getElementById('input');
const startbtn = document.getElementById("start");
const timerDisplay = document.getElementById("timerdisplay");
const stopbtn = document.getElementById("stop")
const pausebtn = document.getElementById("pause")

startbtn.addEventListener("click",startTimer);


function startTimer(){
    let time = parseInt(input.value)
    if(!time){
        display("Enter time in seconds");
        input.value=""
        return;
    }

    let interval = setInterval((event) => {
        time--;
        timerDisplay.innerText = `${time} seconds remaining`;
        if(time<0){
            timerDisplay.innerText = "timer complete"
            input.value=""
            clearInterval(interval)
        }
        
        
        pausebtn.addEventListener("click",pause)  
    }, 1000);
          
    
}

function display(string){
    timerDisplay.innerText = string;
    input.value=" ";
    timerDisplay.focus;
    return;

}
stopbtn.addEventListener("click",stop)
function stop(interval){
    clearInterval(interval)
    input.value=""
    timerDisplay.innerText = ""

}