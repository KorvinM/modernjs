/* index.js */
import sum from './sum.js';
console.log(process.env.NODE_ENV);
console.log('Hello modernjs on the front end');
console.log(sum(2,4));//this should throw an error to test souce mapping
import '../src/styles/main.css';
