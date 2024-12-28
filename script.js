let time = document.querySelector("#time");
let timeformate = document.querySelector("#timeformate");

document.addEventListener("DOMContentLoaded", () => {
    setInterval(shwotime,1);
});

let shwotime = () => {
    let date = new Date();

    let hours = date.getHours();

    let Minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    timeformate.innerHTML = hours > 12 ? "PM" : "AM";
    hours = hours > 12 && hours> 21 ? `${hours - 12}` : hours;
    hours = hours > 12 ? `0${hours - 12}` : hours;
    Minutes = Minutes < 10 ? `0${Minutes}` : Minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    time.innerHTML = `${hours} : ${Minutes} : ${seconds}`

}