function getRandomTrueFalse () {
    const res = Math.random();
    return res > 0.5
}

console.info(getRandomTrueFalse())