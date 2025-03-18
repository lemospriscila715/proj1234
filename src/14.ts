// Proj1234.ts
function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomNumber(5);
console.log(randomNumber);
