const timeDisplay = document.getElementById('time');
const endtime = document.getElementById('end');
const buttons = document.querySelectorAll('[data-time]');
const backTime = document.getElementById('finish');

let countdown;

function timer(seconds) {
    clearInterval(countdown)
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)


    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
};

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ?'0':'' }${remainderSeconds }`;
    timeDisplay.textContent = display;

};

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    backTime.textContent = `Come Back ${hour}:${minutes}`


}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minute.value;
    timer(mins * 60);
    this.reset();

});