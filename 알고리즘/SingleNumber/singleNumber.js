var singleNumber = function(nums) {
  nums.sort();
  for (var i = 0; i < nums.length; i += 2) {
      if (nums[i] != nums[i + 1]) {
          return nums[i];
      }
  }
};