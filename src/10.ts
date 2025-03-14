function getRandomTsCode() {
  // Generate a random number between 1 and 50
  const randNum = Math.floor(Math.random() * 50) + 1;

  // Return the code based on the random number
  switch (randNum) {
    case 1:
      return "console.log('Hello, world!');";
    case 2:
      return "const x = 5; console.log(x);";
    case 3:
      return "function add(a, b) { return a + b; } console.log(add(2, 3));";
    case 4:
      return "let x = 10; let y = 5; if (x > y) { console.log('x is greater than y'); } else { console.log('y is greater than or equal to x'); }";
    case 5:
      return "for (let i = 0; i < 10; i++) { console.log(i); }";
    default:
      return "console.log('This is a random TS code generated by AI Assistant!');";
  }
}
