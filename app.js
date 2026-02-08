const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');


const DEBUG = true;

const setTime = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 - 90;
    secondsHand.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes() + (seconds / 60);
    const minutesDegrees = (minutes / 60) * 360 - 90;
    minutesHand.style.transform = `translateY(-50%) rotate(${minutesDegrees}deg)`;

    const hours = (now.getHours() % 12) + (minutes / 60);
    const hoursDegrees = (hours / 12) * 360 - 90;
    hoursHand.style.transform = `translateY(-50%) rotate(${hoursDegrees}deg)`;

    if (DEBUG) {
        console.log('now:', now.toString());
        console.log('h,m,s:', now.getHours(), now.getMinutes(), now.getSeconds());
        console.log('degrees -> hours:', hoursDegrees, 'minutes:', minutesDegrees, 'seconds:', secondsDegrees);
    }
};

setInterval(setTime, 1000);

setTime();
