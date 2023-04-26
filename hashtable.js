class HashTable {
    constructor() {
      this.table = new Array(100);
    }
  
    // hashing function
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    // add key-value pair to the hash table
    put(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key: key, value: value });
    }
  
    // get value by key from the hash table
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i].key === key) {
            return this.table[index][i].value;
          }
        }
      }
      return undefined;
    }
  
    // remove key-value pair from the hash table
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i].key === key) {
            this.table[index].splice(i, 1);
            if (this.table[index].length === 0) {
              this.table[index] = undefined;
            }
            return true;
          }
        }
      }
      return false;
    }
  }
  
  // example usage
  const hashTable = new HashTable();
  hashTable.put("apple", 3);
  hashTable.put("banana", 4);
  console.log(hashTable.get("apple")); // 3
  console.log(hashTable.remove("banana")); // true
  console.log(hashTable.get("banana")); // undefined
  