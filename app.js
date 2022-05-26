let bass = new Audio('Sounds/bassDrum.wav');
let floor = new Audio('Sounds/floorTom.wav')
let tomS = new Audio('Sounds/tomSmall.wav')
let tomL = new Audio('Sounds/tomLarge.wav')
let snare = new Audio('Sounds/snare.wav')
let crash = new Audio('Sounds/crash.wav')
let ride = new Audio('Sounds/ride.wav')
let hiHat = new Audio('Sounds/hihat.wav')

document.addEventListener('keypress', (e) => {
    if (e.key == 'a' || e.key == '65') {
        bass.play();
        bass.currentTime = 0;
    }
    else if (e.key == 's' || e.key == '83') {
        floor.play();
        floor.currentTime = 0;
    }
    else if (e.key == 'd' || e.key == '68') {
        tomS.play();
        tomS.currentTime = 0;
    }
    else if (e.key == 'f' || e.key == '70') {
        tomL.play();
        tomL.currentTime = 0;
    }
    else if (e.key == 'g' || e.key == '71') {
        snare.play();
        snare.currentTime = 0;
    }
    else if (e.key == 'h' || e.key == '72') {
        crash.play();
        crash.currentTime = 0;
    }
    else if (e.key == 'j' || e.key == '74') {
        ride.play();
        ride.currentTime = 0;
    }
    else if (e.key == 'k' || e.key == '75') {
        hiHat.play();
        hiHat.currentTime = 0;
    }
})

bass.addEventListener('click', (e) => {
   bass.play();
})