function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10) + ' ' + getRandomInt(5));
