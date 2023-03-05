const clock = document.querySelector('#clock');


function getClock(){
    const time = new Date();
    let hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();


    if(hour > 12){
        hour = ( hour - 12);
    }
    let stringHour = `${hour<10 ? `0${hour}` : hour}`;
    clock.innerHTML= `<h1>${stringHour} : ${minutes<10 ? `0${minutes}` : minutes} : ${seconds<10 ? `0${seconds}` : seconds}</h1>` ;
}

function init(){
    setInterval(getClock, 1000);
}

init();