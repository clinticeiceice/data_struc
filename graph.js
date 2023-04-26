class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    toString() {
      let resultString = "";
      for (let i = 0; i < this.vertices.length; i++) {
        resultString += this.vertices[i] + " -> ";
        const neighborList = this.edges[this.vertices[i]];
        for (let j = 0; j < neighborList.length; j++) {
          resultString += neighborList[j] + " ";
        }
        resultString += "\n";
      }
      return resultString;
    }
  }
  const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
console.log(g.toString());

