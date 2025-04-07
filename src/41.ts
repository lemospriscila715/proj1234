let counter = 0;

function getRandomNumber(min: number, max: number): number {
    const range = max - min + 1;
    return Math.floor(Math.random() * (max - min) + min);
}

function randomSequence(length: number): string[] {
    let sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(getRandomNumber(5, 10));
    }
    return sequence;
}
