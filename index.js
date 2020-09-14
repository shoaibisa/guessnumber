const msgEl = document.getElementById('msg');

var rand = getRand();




//get speaks
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

//capture user speech
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMsg(msg);
    checkMsg(msg);
}

function writeMsg(msg) {
    msgEl.innerHTML = `<div class="">You siad:)</div>
    <span class="box">${msg}</span>`;
}

function checkMsg(msg) {
    var num = +msg;

    if (Number.isNaN(num)) {
        msgEl.innerHTML += `<div class="">Not valid thing </div>`;
        return;
    }

    if (num > 100 || num < 1) {
        msgEl.innerHTML = `<div class="">Number must be in range of 1-100</div>`;
        return;
    }

    if (num === rand) {
        document.body.innerHTML = `<h2> Congrats! you've gussed the correct number <br> It was ${num}</h2>
     
        <button class="play-again" id="play-again"> PLAY AGAIN </button>
        `;
    } else if (num > rand) {
        msgEl.innerHTML += `<div class="">GO HIGH </div>`;
    } else {
        msgEl.innerHTML += `<div class="">GO LOW </div>`;
    }
}




//generate random
function getRand() {
    return Math.floor(Math.random() * 100 + 1)
}
recognition.addEventListener('result', onSpeak);

//end
recognition.addEventListener('end', () => recognition.start());

//relod page

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
})
