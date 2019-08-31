"use strict";
/*so I had to use w3 schools for this bc i had no idea how to do it.
that's why i put in all these notes so i can read back and 
understand the code.

im 100% sure this is not the way this is supposed to be done

yikes 
*/
let i = 0; //So here I'm defining i to be 0 and i is always a number i think??? small brain hours
const text = "Creeper? Aww man!"; //this is the text.
const speed = 200; // This is the speed of the timer in miliseconds

function typeWriter() {
  document.querySelector("#typewriter").textContent += text.charAt(i);
  /*i edited line nine. 
  it was: document.getElementById("demo").innerHTML += txt.charAt(i);
  but i changed it to things i understand and heY! IT STILL WORKS woo
    charAt sends you back the character at the specified index

  */
  i++; //wtf is this?? i see this everywhere but WHAT DOES ++ MEAN?!? without this all i get is CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
  //so i am assuming this is where the magick happens?
  //BUT WHY THIS IS 3 CHARACTERS AND IS ALL THAT MATTERS.
  //LIKE ??? WITHOUT THIS I GET STUCK AT THE LETTER C
  // ?????? MUST ASK PETER OR JESUS OR BUDDHA I GUESS
  setTimeout(typeWriter, speed); //THIS I KNOW! - so this runs a function every few seconds
  //SO BASICALLY THIS RUNS TYPE WRITER EVERY "speed" seconds. and since speed is 200?
  //boom. that's how i get this thing to work
}

typeWriter();
//i want this to infinite loop but i have no skills
