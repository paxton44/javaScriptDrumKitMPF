/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// Making Keys Fire and Play Sounds

window.addEventListener('keydown', function(e) {
    // Using Template Literal to select any keycode pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // checking to see if keys fire
    console.log(audio);
    // making if statement to stop audio if no audio available 
    if (!audio) return;
    // firing sounds by the key ids
    audio.play();
});



