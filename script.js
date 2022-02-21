/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */


// const key = document.getElementById('key');
const key = document.querySelector('key');
document.addEventListener('keydown', logKey);


function logKey(e) {
    console.log(e)
};
