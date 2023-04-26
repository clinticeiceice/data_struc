class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    // add element to the queue with priority
    enqueue(element, priority) {
      const queueElement = { element, priority };
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  
    // remove element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift().element;
    }
  
    // return the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0].element;
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
        str += `${this.items[i].element} - ${this.items[i].priority}\n`;
      }
      console.log(str);
    }
  }
  
  // example usage
  const priorityQueue = new PriorityQueue();
  console.log(priorityQueue.isEmpty()); // true
  
  priorityQueue.enqueue("A", 2);
  priorityQueue.enqueue("B", 3);
  priorityQueue.enqueue("C", 1);
  priorityQueue.printQueue(); // C - 1, A - 2, B - 3
  
  console.log(priorityQueue.front()); // C
  
  priorityQueue.dequeue();
  priorityQueue.printQueue(); // A - 2, B - 3
  
  console.log(priorityQueue.size()); // 2
  