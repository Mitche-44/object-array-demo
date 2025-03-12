# Array and Object Demo

This is a simple demonstration of working with **arrays** and **objects** in JavaScript.

## Arrays
An array is an ordered list of values. Example:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding elements
fruits.push("Orange");

// Iterating through an array
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

## Objects
An object is a collection of key-value pairs. Example:

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

// Accessing properties
console.log(person.name); // Output: John

// Adding properties
person.job = "Developer";

// Iterating through an object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## Usage
1. Clone this repository.
2. Open the `object.js and array.js` file to see the examples in action.
3. Run the file using Node.js or in a browser console.

```bash
node index.js
```

---

Feel free to explore and modify the code! 🚀