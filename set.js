class Set {
    constructor() {
      this.items = [];
    }
  
    // add element to the set
    add(element) {
      if (!this.has(element)) {
        this.items.push(element);
      }
    }
  
    // remove element from the set
    remove(element) {
      const index = this.items.indexOf(element);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    // check if the set contains an element
    has(element) {
      return this.items.includes(element);
    }
  
    // return the size of the set
    size() {
      return this.items.length;
    }
  
    // return an array of all elements in the set
    values() {
      return this.items;
    }
  }
  
  // example usage
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  console.log(set.values()); // [ 1, 2, 3 ]
  console.log(set.has(2)); // true
  console.log(set.size()); // 3
  set.remove(2);
  console.log(set.values()); // [ 1, 3 ]
  