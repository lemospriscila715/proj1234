function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generatePassword(): string {
  const length = getRandomNumber(8, 12);
  let password = '';
  for (let i = 0; i < length; i++) {
    password += String.fromCharCode(getRandomNumber(65, 90));
  }
  return password;
}
