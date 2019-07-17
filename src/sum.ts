// interface Wrapped<T> {
//   valueOf(): T;
// }
// class NumberWrapper {
//   constructor(private value: number) {}
//   valueOf(): number {
//     return this.value;
//   }
// }

function sum(a: number, b: number): Number {
  // return new NumberWrapper(a) + new NumberWrapper(b);
  return a + b;
}
// export default sum;
export default sum;
