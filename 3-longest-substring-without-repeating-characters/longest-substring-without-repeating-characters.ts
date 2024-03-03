function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let substr = '', idx: number;
    for (let i = 0; i < s.length; i++) { // will work as RWS
        idx = substr.indexOf(s[i]) // find the Char fisrt index
        if (idx >= 0) { // if exist 
            max = substr.length > max ? substr.length : max;
            substr = substr.slice(idx + 1) // slice one from left plus Current letter to be added after to insure Unique 
        }
        substr += s[i]; // adding the char to string
    }
    max = substr.length > max ? substr.length : max;
    return max;
};