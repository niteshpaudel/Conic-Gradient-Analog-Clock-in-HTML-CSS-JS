const body = document.querySelector('body');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const rotationDegree = 6;
function updateRotation() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const continuousRotation = (seconds + (now.getMilliseconds() / 1000)) * rotationDegree;
    minuteHand.style.setProperty('--minute-rotation',`${minutes*rotationDegree}deg`);
    const hourRotation = (hours % 12) * 30 + (minutes * 0.5);
    hourHand.style.setProperty('--hour-rotation', `${hourRotation}deg`);
    body.style.setProperty('--rotation', `${continuousRotation}deg`);
    requestAnimationFrame(updateRotation);
}

requestAnimationFrame(updateRotation);
