function removeElement(nums: number[], val: number): number {
    // key is in reverse order 
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
    return nums.length;
};