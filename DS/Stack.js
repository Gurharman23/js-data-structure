class Stack {
  __val = [];
  push(item) {
    this.__val.push(item);
  }
  pop() {
    if (this.isEmpty()) return null;
    return this.__val.pop();
  }
  isEmpty() {
    return this.__val.length === 0;
  }
  top() {
    if (this.isEmpty()) return null;
    return this.__val[this.__val.length - 1];
  }
}
const stackTests = () => {
  const st = new Stack();
  st.push(1);
  st.push(2);
  if (!(st.__val.includes(2) && st.__val[0] === 1)) throw "push() tests failed";
  if (st.pop() !== 2) throw "pop() test failed";
  st.pop();
  if (!st.isEmpty()) throw "isEmpty() test failed";
  if (st.top() !== null) throw "top() edge case test faild";
  st.push(3);
  if (st.top() !== 3) throw "top() test failed";

  console.log("=====all===test passed======");
};

stackTests();
