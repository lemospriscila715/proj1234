export class Proj1234 {
  public static getRandomNumber(min: number, max: number): number {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  }
}
