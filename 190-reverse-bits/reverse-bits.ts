function reverseBits(n: number): number {
    let sum = 0;
    let modifier = 1;
    for (let i = 31; i >= 0; i--) {
        // Use bitwise shift and bitwise AND to extract each bit
        let bit = (n >> i) & 1;
        sum = (bit * modifier) + sum;
        modifier = modifier*2;
    }
    return sum;
};