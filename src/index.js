/* index.js */
import '../src/styles/main.scss';
import sum from './sum.js';

let cssNote='Compiled css is loaded dynamically in development mode. Production mode extracts the compiled css into a separate stylesheet, or optionally injects the styles into the head of the document.';

console.log('Hello modernjs on the front end');
console.log(process.env.NODE_ENV);
console.log(cssNote);
console.log(sum(2,4));//this should throw an error to test source mapping
