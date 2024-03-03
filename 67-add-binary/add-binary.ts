function addBinary(a: string, b: string): string {
    const aNum: bigint = BigInt("0b" + a);
    const bNum: bigint = BigInt("0b" + b);
    return (aNum+bNum).toString(2);
};