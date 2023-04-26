class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // add element at the end of the list
    add(data) {
      const node = new Node(data);
      if (this.head === null) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
  
    // insert element at given index
    insertAt(data, index) {
      if (index > 0 && index > this.size) {
        return false;
      } else {
        const node = new Node(data);
        let current = this.head;
        let previous = null;
        let i = 0;
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
        node.next = current;
        if (previous === null) {
          this.head = node;
        } else {
          previous.next = node;
        }
        this.size++;
        return true;
      }
    }
  
    // remove element at given index
    removeAt(index) {
      if (index > 0 && index >= this.size) {
        return null;
      } else {
        let current = this.head;
        let previous = null;
        let i = 0;
        if (index === 0) {
          this.head = current.next;
        } else {
          while (i < index) {
            previous = current;
            current = current.next;
            i++;
          }
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
    }
  
    // remove element by value
    remove(data) {
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (current.data === data) {
          if (previous === null) {
            this.head = current.next;
          } else {
            previous.next = current.next;
          }
          this.size--;
          return current.data;
        }
        previous = current;
        current = current.next;
      }
      return null;
    }
  
    // return element at given index
    get(index) {
      if (index >= 0 && index < this.size) {
        let current = this.head;
        let i = 0;
        while (i < index) {
          current = current.next;
          i++;
        }
        return current.data;
      }
      return null;
    }
  
    // check if the list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // return the size of the list
    getSize() {
      return this.size;
    }
  
    // print the elements of the list
    printList() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
      console.log(str);
    }
  }
  
  // example usage
  const list = new LinkedList();
  console.log(list.isEmpty()); // true
  
  list.add("A");
  list.add("B");
  list.add("C");
  list.printList(); // A B C
  
  list.insertAt("D", 2);
  list.printList(); // A B D C
  
  list.removeAt(1);
  list.printList(); // A D C
  
  list.remove("D");
  list.printList(); // A C
  
  console.log(list.get(1)); //
  