const hourE1 = document.getElementById("hour");
const minitueE1 = document.getElementById("minitues");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minitueE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        
    }, 1000);
}

updateClock();
