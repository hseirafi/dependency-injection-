

const combine = first => second => third => first(second(third));
const sqrAdd = combine(combine)(combine);
const sqrAddSum = combine(combine)(sqrAdd);
const sqr = x => x * x;
const add = x => y => x + y;
const sum = x => y => z => x + y + z;

export const compose = {
  squreAdd: sqrAdd(sqr)(add),
  squareSum: sqrAddSum(sqr)(sum)
};

console.log(compose.squreAdd(3)(2));

// ^ currying VS v class

export class klAss {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  sqr() {
    let add = this.x + this.y;
    return add * add;
  }
  add(x, y) {
    this.x = x;
    this.y = y;
    return this.x + this.y;
  }
  sum(x, y, z) {
      this.z = z;
    return this.x + this.y + this.z;
  }
}

let clAss = new klAss(3,2);

console.log(clAss.sqr());
