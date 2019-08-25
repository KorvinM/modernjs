/* index.js */
"use strict";
import '../src/styles/main.scss';
/*define some GLOBALS. This could best be abstracted into a file/module*/
const mode = process.env.NODE_ENV;
const secret = process.env.MY_SECRETTHING;

let modeNote;
if (mode=="development"){
  modeNote = "In this mode, compiled css is loaded dynamically."
}
else if (mode == "production") {
  modeNote="In this mode, compiled css is extracted to a separate stylesheet, or optionally injected into the head of the document."
}

console.log('Hello Mode');
console.log('Mode is running in ' + mode + ' mode');
console.log(modeNote);

console.log('This secret is available in either mode: ' + secret);
