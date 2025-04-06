export default function randomTsCode() {
  // Example of how to generate a random TypeScript code snippet

  const example = `
    // This is a simple example code snippet using TypeScript.

    export class MyClass {
      constructor(public name: string) { }
      getMyProperty(): void {
        console.log(`Hello, ${this.name}`);
      }
    }

    const myInstance = new MyClass("World");
    myInstance.getMyProperty();`
  
  return example;
}
