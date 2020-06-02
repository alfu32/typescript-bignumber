export class BigNumber{
  public base = 65536;
  public numbers: Array<number> = new Array<number>();
  public static clone(): BigNumber{
    const n = new BigNumber(0);
    n.numbers = [...this.numbers];
    return n;
  }
  https://www.acceptance.cc.cec/archibus/schema/ab-core/views/process-navigator/navigator-details.axvw?ticket=ST-25468630-jo84fYsL3tWwHsbzqYnOA1QNXN6sho4F4rHNzkp5ngKi4C7U2BDVPuCm6XWsE4SU54Is1mLbhXJn9jAPjgf3Fq-jpJZscgsw0KzTP3jULmpbl-ttq4cvlIrCY3E1rTCpzmWomqPapbl4bhzdtjn1lznOIwZakeipp1YjSwNvr3LWzY1eLUG7QBCIHaIlOUPhPZsaa
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
    let a = this;
    let b = n;
    let c = new BigNumber(0);

    while( true ) {

    }
  }
}