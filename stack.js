class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0)
        return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
      return str;
    }
  }
  
  // Creating object for the stack class
  let stack = new Stack();
  
  // Testing stack methods
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.printStack()); // prints 10 20 30
  console.log(stack.peek()); // prints 30
  console.log(stack.pop()); // prints 30
  console.log(stack.printStack()); // prints 10 20
  