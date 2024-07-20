
var marquee = document.getElementById('marquee');
var isPaused = false;

function stopMarquee() {
    if (!isPaused) {
        marquee.stop();
        isPaused = true;
    }
}

function startMarquee() {
    if (isPaused) {
        marquee.start();
        isPaused = false;
    }
}