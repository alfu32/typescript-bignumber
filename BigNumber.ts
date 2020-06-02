export const BIG_NUMBER_BASE = 1000;
export class BigNumber{
  public base = BIG_NUMBER_BASE;
  public numbers: Array<number> = new Array<number>();
  intermediate: Array<any> = [];
  public static clone(): BigNumber{
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
  public add( n: number): BigNumber {
    let a = this.numbers;
    let b = new BigNumber(n).numbers;
    let result = new BigNumber(n);
    let carry = 0;
    let base = BIG_NUMBER_BASE;
    let rest = 0;
    let sum = 0;
    let index = 0;
    while (
        (
          carry !== 0
          || a[index] !== undefined
          || b[index] !== undefined
        )
      ) {
      sum = ((a[index]!==undefined)?a[index]:0)
        + ((b[index]!==undefined)?b[index]:0)
        + carry;
      // if( a[index] ) {
      //   if( b[index] ) {
      //     sum = a[index] + b[index] + carry;
      //   } else {
      //     sum = a[index] + carry;
      //   } 
      // } else {
      //   if( b[index] ) {
      //     sum = b[index] + carry;
      //   } else {
      //     sum = carry;
      //   }
      // }
      let expr = `${
        (a[index]!==undefined)?a[index]:0
      } + ${
        (b[index]!==undefined)?b[index]:0
      } + ${carry}`;
      rest = sum % base;
      carry = ( sum - rest ) / base;
      result.numbers[index] = rest;
      result.intermediate.push({
        sum, rest, carry,
        expr
      })
      index++;
    }
    // if(carry != 0) {
    //   result.numbers[index] = carry;
    // }
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
  public mul( n: number): BigNumber {
    let a = this.numbers;
    let b = new BigNumber(n).numbers;
    let result = new BigNumber(n);
    let carry = 0;
    let base = BIG_NUMBER_BASE;
    let rest = 0;
    let prod = 0;
    let index = 0;
    while(
        (
          carry !== 0
          || a[index] !== undefined
          || b[index] !== undefined
        )
    ) {
      // prod = ((a[index]!==undefined)?a[index]:1)
      //   * ((b[index]!==undefined)?b[index]:1)
      //   + carry;
      if( a[index] ) {
        if( b[index] ) {
          prod = a[index] * b[index] + carry;
        } else {
          prod = a[index] + carry;
        } 
      } else {
        if( b[index] ) {
          prod = b[index] + carry;
        } else {
          prod = carry;
        }
      }
      rest = prod % base;
      carry = ( prod - rest ) / base;
      result.numbers[index] = rest;
      index++;
    }
    if( carry != 0) {
      result.numbers[index] = carry;
    }
    return result;
  }
}