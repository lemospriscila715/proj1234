// Proj1234
function getRandomTsCode() {
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomCode = "";
  for (let i = 0; i < 10; i++) {
    randomCode += numbers[Math.floor(Math.random() * 10)];
  }
  for (let j = 0; j < 5; j++) {
    randomCode += letters[Math.floor(Math.random() * 26)];
  }
  return randomCode;
}
