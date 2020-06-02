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
  }
  public constructor(n?: number){
    if( n === undefined)
    this.assign(n);
  }
  public add( n: number) {
    let a = this;
    let b = n;
    let c = new BigNumber(0);

    while( true ) {

    }
  }
}