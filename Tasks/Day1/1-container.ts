class Integer {
  #value: number;
  #isInteger = (i: number) => i % 1 === 0 ? true : false;
  get() {
    return this.#value;
  }

  add = (i: Integer) => new Integer(this.#value + i.get());
  div = (i: Integer) => new Integer(this.#value / i.get());
  gt = (i: Integer) => this.#value > i.get() ? true : false;

  constructor(i: number) {
    if (!this.#isInteger(i)) throw new Error('Not Integer');
    this.#value = i;
  }
}

// Usage

const a = new Integer(7);
const b = new Integer(3);

const c = a.add(b);
const d = a.div(b);
if (a.gt(b)) {
  console.log('a > b');
}

console.log(`c = ${c.get()}`);
console.log(`d = ${d.get()}`);
