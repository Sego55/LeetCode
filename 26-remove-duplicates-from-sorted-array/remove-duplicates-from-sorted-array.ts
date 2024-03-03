function removeDuplicates(nums: number[]): number {
    // key is in reverse order
    let curElm = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === curElm) {
            nums.splice(i, 1);
        }
        else {
            curElm = nums[i];
        }
    }

    return nums.length;

};