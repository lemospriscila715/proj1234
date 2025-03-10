export function proj1234(): string {
  let randomCode = "";
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 10; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomCode;
}
