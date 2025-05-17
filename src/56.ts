function calculateMedian(numbers: number[]): number {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    if (n % 2 === 0) {
        return (numbers[n / 2 - 1] + numbers[n / 2]) / 2.0;
    } else {
        return numbers[Math.floor(n / 2)];
    }
}

function processData(data: any[]): any[] {
    const newData = data.map(item => calculateMedian(item));
    return newData;
}
