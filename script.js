/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

const key = document.querySelector('key');
document.addEventListener('keydown', logKey);

const audio = document.querySelector('audio');
document.addEventListener('keydown', playSound);



function logKey(e) {
    console.log(e)
};

function playSound(e) {
    console.log(e)
};
