// Import stylesheets
import './style.css';
import { BigInt } from './BigInt';

let tests = [
  function testFromString() {
    let str = '111222333444555666';
    let result = BigInt.fromString(str);
    return result;
  },
  function testAdd() {
    let result = new BigInt(555666777888);
    result = result.add(444333222112);
    return result;
  },
  function testAdd2() {
    let result = new BigInt(777888999);
    result = result.add(1);
    return result;
  },
  function testShift() {
    let result = new BigInt(1000);
    result = result.shift(2);
    return result;
  },
  function testShift2() {
    let result = new BigInt(1000);
    result = result.shift(0);
    return result;
  },
  function testUnshift() {
    let result = new BigInt(1201999111);
    result = result.shiftRight(2);
    return result;
  },
  function testMul() {
    let result = new BigInt(2);
    result = result.mul( 65536 );
    result = result.mul(new BigInt(65536) );
    result = result.mul(new BigInt(65536) );
    return result;
  },
  function testPow() {
    let result = new BigInt(2);
    result = result.pow(1000);
    return result;
  }
]
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>BigInt Tests</h1>
<pre>${
  tests
  .map( t => t.name + ':' + JSON.stringify(t(), null, '') )
  .join('<br>')
}</pre>`;