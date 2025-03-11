function getRandomTsCode() {
  const codes = ['1234', '5678', '9012', 'abcdef'];
  const randomIndex = Math.floor(Math.random() * codes.length);
  return codes[randomIndex];
}
