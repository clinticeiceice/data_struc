class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // insert a word into the trie
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true;
    }
  
    // search for a word in the trie
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.isEndOfWord;
    }
  
    // check if the trie has any word starting with the prefix
    startsWith(prefix) {
      let currentNode = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix.charAt(i);
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return true;
    }
  }
  
  // example usage
  const trie = new Trie();
  trie.insert('apple');
  console.log(trie.search('apple')); // true
  console.log(trie.search('app')); // false
  console.log(trie.startsWith('app')); // true
  trie.insert('app');
  console.log(trie.search('app')); // true
  