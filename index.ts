// Import stylesheets
import './style.css';
import { BigNumber } from './BigNumber';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const a = new BigNumber(655565665);
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
<pre>${JSON.stringify(a).toString()}</pre>`;