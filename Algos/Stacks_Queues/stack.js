class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  //Push method

  push(element) {
    this.items[this.count] = element; // the count serves as the index. element received is value
    this.count++ //count incremented to place new values at next index
    return this.count //return the new length
  }

  pop() {
    if (this.count == 0) return undefined
    let removed = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--
    return removed

  }

  peek() {
    return this.items[this.count - 1]
  }
}


const stack = new Stack()
stack.push(100)
stack.push(399)
console.log(stack.pop()) // 399 removed and returned 
console.log(stack.peek()) // peek at last element in stack --> 100
console.log(stack)