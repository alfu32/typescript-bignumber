export class BigNumber{
  public base = 65536;
  public numbers: Array<number> = new Array<number>();
  public static clone(): BigNumber{
    const n = new BigNumber(0);
    n.numbers = [...this.numbers];
    return n;
  }
  public assign(value: number){
    let v = value;
    const b = this.base;
    this.numbers = [];
    while ( v >= b ) {
      this.numbers.unshift(v % b);
      v = (v - (v % b)) / b;
    }
    this.numbers.unshift(v);
  }
  public constructor(n?: number){
    if( n !== undefined) {
      this.assign(n);
    }
  }
  public add( n: number) {
    let a = this.numbers;
    let result = new BigNumber(n);
    let b = result.numbers;
    result = new BigNumber(n);
    let carry = 0;
    let base = this.base;
    let rest = 0;
    let sum = 0;
    let index = 0;
    while( rest !== 0 || carry !== 0 || a[index] !== undefined || b[index] !== undefined ) {
      if( a[index] ) {
        if( b[index] ) {
          sum = a[index] + b[index] + carry;
        } else {
          sum = a[index] + carry;
        } 
      } else {
        if( b[index] ) {
          sum = b[index] + carry;
        } else {
          sum = carry;
        }
      }
      rest = sum % base;
      carry = ( sum - rest ) / base;
      result[index] = rest;
    }
  }
}