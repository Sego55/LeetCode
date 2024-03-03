const symbols: { [key: string]: number } = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romanToInt(s: string): number {
    let prevValue = 0;
    let value = 0;
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        value = symbols[s[i]];
        if (prevValue > value) {
            sum -= value;
        } else {
            sum += value;
        }
        prevValue = value
    }
    return sum;
};