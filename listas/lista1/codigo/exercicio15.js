function fibonacci() {

    const seq = [];
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            seq.push(0);
        } else if (i === 1) {
            seq.push(1);
        } else {
            seq.push(seq[i - 1] + seq[i - 2]);
        }
    }
    return seq;
}

module.exports = fibonacci;
