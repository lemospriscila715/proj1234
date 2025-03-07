  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomColor(): string {
    const colors = ['#ff006f', '#249757', '#ffd633', '#98df8a'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function getRandomGrade(): number {
    const grades = [1, 2, 3, 4, 5];
    return grades[Math.floor(Math.random() * grades.length)];
  }
  
  function getRandomName(): string {
    const names = ['John', 'Jane', 'Bob', 'Alice'];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  function getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
  
  export default {
    getRandomNumber,
    getRandomColor,
    getRandomGrade,
    getRandomName,
    getRandomNumber
  };
  