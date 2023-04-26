class Queue {
    constructor() {
      this.items = [];
    }
  
    // add element to the back of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // remove element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // return the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // return the size of the queue
    size() {
      return this.items.length;
    }
  
    // print the elements of the queue
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      console.log(str);
    }
  }
  
  // example usage
  const queue = new Queue();
  console.log(queue.isEmpty()); // true
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.printQueue(); // 1 2 3
  
  console.log(queue.front()); // 1
  
  queue.dequeue();
  queue.printQueue(); // 2 3
  
  console.log(queue.size()); // 2
  