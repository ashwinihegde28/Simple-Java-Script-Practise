const readline = require("readline");
const sum = (a, b) => a + b;

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidInput = (userInput) =>
  isNaN(userInput) || userInput < 0 ? true : false;

r1.question("Enter the first number: ", (userInput1) => {
  r1.question("Enter the second number: ", (userInput2) => {
    userInput1 = parseFloat(userInput1);
    userInput2 = parseFloat(userInput2);

    if (!isValidInput(userInput1) || !isValidInput(userInput2)) {
      console.log("Please provide valid numbers greater than or equal to 0");
    } else {
      const result = sum(userInput1, userInput2);
      console.log(`The sum of ${userInput1} and ${userInput2} is: ${result}`);
    }
    r1.close();
  });
});
