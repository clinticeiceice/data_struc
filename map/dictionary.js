// Creating a map
let myMap = new Map();

// Adding key-value pairs to the map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

// Accessing the values using the keys
console.log(myMap.get("name")); // Output: John
console.log(myMap.get("age")); // Output: 30
console.log(myMap.get("city")); // Output: New York
// Checking if a key exists in the map
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("gender")); // Output: false
// Removing a key-value pair from the map
myMap.delete("city");
// Iterating over the keys in the map
for(let key of myMap.keys()) {
  console.log(key); // Output: name, age
}
// Iterating over the values in the map
for(let value of myMap.values()) {
  console.log(value); // Output: John, 30
}
// Iterating over the key-value pairs in the map
for(let [key, value] of myMap.entries()) {
  console.log(key + ": " + value); // Output: name: John, age: 30
}
// Clearing the map
myMap.clear();
console.log(myMap.size); // Output: 0

/**
 In this example, we first create an 
 empty map using the Map() constructor. We then add 
 key-value pairs to the map using the set() method, and retrieve 
 the values using the get() method. We can also check if a key 
 exists in the map using the has() method, and remove a key-value 
 pair using the delete() method.

We can iterate over the keys, values, 
or key-value pairs in the map using the keys(), 
values(), and entries() methods respectively. 
Finally, we can clear the map using the clear() method.
 */