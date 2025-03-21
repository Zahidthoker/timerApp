const input = document.getElementById('input');
const startbtn = document.getElementById("start");
const timerDisplay = document.getElementById("timerdisplay");
const stopbtn = document.getElementById("stop")
const pausebtn = document.getElementById("pause")
let flag = false;
let remainingTime=0;
let  interval;
startbtn.addEventListener("click",startTimer);


function startTimer(){
    let time = parseInt(input.value)
    if(!time){
        display("Enter time in seconds");
        input.value=""
        return;
    }

            if(flag){
                time = remainingTime;
                flag=false;
            }

        interval = setInterval(() => {
        time--;
        timerDisplay.innerText = `${time} seconds remaining`;
        if(time<0){
            timerDisplay.innerText = "Time is up!"
            input.value=""
            clearInterval(interval)
        }
        
        
 
    }, 1000);

    


    pausebtn.addEventListener("click",()=>{
       if(!flag){
            clearInterval(interval);
            remainingTime=time;
            timerDisplay.innerText =   `Paused at ${remainingTime} seconds`
            flag=true;
            pausebtn.innerText = "▶️Resume"
        }else{
            startTimer();
            pausebtn.innerText = "⏸️Pause"
        }
    })
       
    
}


stopbtn.addEventListener("click",()=>{
    clearInterval(interval)
    input.value=""
    timerDisplay.innerText = ""
    
})




function display(string){
    timerDisplay.innerText = string;
    input.value=" ";
    timerDisplay.focus;
    return;

}
