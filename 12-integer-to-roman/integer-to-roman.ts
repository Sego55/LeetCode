function intToRoman(num: number): string {
    const sm: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    const keys: Array<number> = Object.keys(sm).map(Number);
    let roman: string = '';
    let curNo = keys.length - 1;
    while (num > 0) {
        if (num - keys[curNo] >= 0) {
            num -= keys[curNo];
            roman += sm[keys[curNo]];
        } else {
            curNo--;
        }
    }
    return roman;
}
