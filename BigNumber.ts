export const BIG_NUMBER_BASE = 256;

export class BigNumber{

  public base = BIG_NUMBER_BASE;
  public numbers: Array<number> = new Array<number>();
  intermediate: Array<any> = [];
  public clone(): BigNumber{
    const n = new BigNumber(0);
    n.numbers = [...this.numbers];
    return n;
  }
  public assign(value: number){
    let v = value;
    const b = BIG_NUMBER_BASE;
    this.numbers = [];
    while ( v >= b ) {
      this.numbers.push(v % b);
      v = (v - (v % b)) / b;
    }
    this.numbers.push(v);
  }
  public constructor(n?: number){
    if( n !== undefined) {
      this.assign(n);
    }
  }
  public add( n: number | BigNumber): BigNumber {
    let a = this.numbers;
    let b = ( (n instanceof BigNumber) ? n : new BigNumber(n)).numbers;
    let result = new BigNumber();
    for(let index = 0;a[index] !== undefined
          || b[index] !== undefined;
      index++) {
      result.numbers[index] = ((a[index]!==undefined)?a[index]:0) + ((b[index]!==undefined)?b[index]:0)
    }
    result.normalize();
    return result;
  }
  shift( n: number): this {
    const arr = new Array<number>(n).fill(0);
    this.numbers.unshift( ...arr);
    return this;
  }
  shiftRight( n: number): this {
    while(n--)this.numbers.shift();
    return this;
  }
  private _multiply(n: number) {
    let a = this.numbers;
    let result = new BigNumber();
    for(let index = 0;a[index] !== undefined;
      index++) {
      result.numbers[index] = ((a[index]!==undefined)? a[index]* n: 0 )
    }
    result.normalize();
    return result;
  }
  public mul(factor: number | BigNumber): BigNumber {
    let a = this.numbers;
    let n = (factor instanceof BigNumber) ? factor : new BigNumber(factor);
    let results = new Array<BigNumber>();
    for( let i = 0; i < a.length; i++) {
      results.push( n._multiply(a[i]).shift(i) )
    }
    let result = results.reduce( (a,v) => {
      a=a.add(v);
      return a;
    }, new BigNumber() );
    result.normalize();
    return result;
  }
  public pow( n: number): BigNumber {
    const factor = this.clone();
    let result = new BigNumber(1);
    for(let i=0;i<n;i++){
      result = result.mul(factor)
    }
    return result;
  }
  public normalize(){
    const n = [...this.numbers];
    this.numbers = [];
    let rest = 0;
    let carry = 0;
    let i = 0;
    while ( i < n.length || carry !== 0 ) {
      let val = ((n[i]!==undefined)?n[i]:0) + carry;
      rest = val % BIG_NUMBER_BASE;
      carry = ( val - rest ) / BIG_NUMBER_BASE;
      this.numbers.push(rest);
      i++;
    }
    if( carry != 0) {
      this.numbers[i] = carry;
    }
  }
}