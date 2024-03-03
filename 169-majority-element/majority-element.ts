function majorityElement(nums: number[]): number {
    nums.sort(function (a, b) { return b - a });
    let sum = 0;
    let curElm = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === curElm) {
            sum++;
        }
        else {
            curElm = nums[i];
            sum = 1;
        }
        if (sum > (nums.length / 2)) {
            return curElm;
        }
    }
};