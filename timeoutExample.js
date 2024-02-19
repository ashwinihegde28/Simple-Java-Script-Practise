function greet() {
  console.log("Hi am Function called greet :) ");
}

setTimeout(greet, 2000);
console.log("Waiting for the greeting...");
console.log("This line was printed before the greeting.");
