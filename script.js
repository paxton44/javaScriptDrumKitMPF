/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// Making Keys Fire and Play Sounds

const key = document.querySelector('key');
document.addEventListener('keydown', playSound);

const audio = document.querySelector('audio');
document.addEventListener('keydown', playSound);


function playSound(e) {
    console.log(e)
    audio.play(e);
};


