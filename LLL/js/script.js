const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const nowYear = new Date().getFullYear();
const nextYear = new Date(`December 24 ${nowYear} 00:00:00`);



function update(){
    const nowTime = new Date();
    const diff = nextYear - nowTime;
    const dayLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minuteLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondLeft = Math.floor(diff / 1000) % 60;

    days.innerText = dayLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;

    minute.innerText =minuteLeft < 10 ? '0' + minuteLeft : minuteLeft;
    second.innerText = secondLeft < 10 ? '0' + secondLeft : secondLeft;
}
update()

setInterval(update, 1000)
