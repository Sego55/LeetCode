function myPow(x: number, n: number): number {
    function fastPower(x: number, n: number): number {
        if (n === 0) return 1;
        if (n === 1) return x;
        if (Math.abs(n) % 2 === 0) {
            return fastPower(x * x, Math.abs(n) / 2);
        } else {
            return x * fastPower(x * x, (Math.abs(n) - 1) / 2);
        }
    }
    const result =  fastPower(x, Math.abs(n));
    if (n < 0) {
        return 1 /result;
    }
    return result;
}
