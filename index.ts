// Import stylesheets
import './style.css';
import { BigNumber } from './BigNumber';

let tests = [
  () => {
    let result = new BigNumber(555666777888);
  result = result.add(444333222112);
    return result;
  },
  () => {
    let result = new BigNumber(8999999);
    result = result.add(111);
    return result;
  },
  () => {
    let result = new BigNumber(1000);
    result = result.shift(2);
    return result;
  },
  () => {
    let result = new BigNumber(1201999111);
    result = result.shiftRight(2);
    return result;
  }
]
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
<pre>${
  tests
  .map( t => JSON.stringify(t(), null, '') )
  .join('<br>')
}</pre>`;