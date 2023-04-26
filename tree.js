class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // insert value into the tree
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // helper function to insert node recursively
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // search for a value in the tree
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    // helper function to search node recursively
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      } else {
        return true;
      }
    }
  
    // remove a value from the tree
    remove(value) {
      this.root = this._removeNode(this.root, value);
    }
  
    // helper function to remove node recursively
    _removeNode(node, value) {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = this._removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = this._removeNode(node.right, value);
        return node;
      } else {
        // node to be deleted has no children
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        // node to be deleted has one child
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        // node to be deleted has two children
        let aux = this._findMinNode(node.right);
        node.value = aux.value;
        node.right = this._removeNode(node.right, aux.value);
        return node;
      }
    }
  
    // helper function to find the node with minimum value
    _findMinNode(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }
  
  // example usage
  const bst = new BinarySearchTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  console.log(bst.search(30)); // true
  bst.remove(30);
  console.log(bst.search(30)); // false
  