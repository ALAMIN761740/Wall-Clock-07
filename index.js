const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock, 1000); 
    
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const hoursDeg = (hours / 12) * 360;
    hourE1.style.transform = `rotate(${hoursDeg}deg)`;

    const minutesDeg = (minutes / 60) * 360 ;
    minuteE1.style.transform = `rotate(${minutesDeg}deg)`;

    const secondsDeg = (seconds / 60) * 360;
    secondE1.style.transform = `rotate(${secondsDeg}deg)`;
}

// updateClock();
setInterval(updateClock, 1000);