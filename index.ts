// Import stylesheets
import './style.css';
import { BigNumber } from './BigNumber';

let tests = [
  function testtestFromString() {
    let str = '111';
    let result = BigNumber.fromString(555666777888);
    return result;
  },
  function testAdd() {
    let result = new BigNumber(555666777888);
    result = result.add(444333222112);
    return result;
  },
  function testAdd2() {
    let result = new BigNumber(777888999);
    result = result.add(1);
    return result;
  },
  function testShift() {
    let result = new BigNumber(1000);
    result = result.shift(2);
    return result;
  },
  function testShift2() {
    let result = new BigNumber(1000);
    result = result.shift(0);
    return result;
  },
  function testUnshift() {
    let result = new BigNumber(1201999111);
    result = result.shiftRight(2);
    return result;
  },
  function testMul() {
    let result = new BigNumber(2);
    result = result.mul( 65536 );
    result = result.mul(new BigNumber(65536) );
    result = result.mul(new BigNumber(65536) );
    return result;
  },
  function testPow() {
    let result = new BigNumber(2);
    result = result.pow(1000);
    return result;
  }
]
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
<pre>${
  tests
  .map( t => t.name + ':' + JSON.stringify(t(), null, '') )
  .join('<br>')
}</pre>`;