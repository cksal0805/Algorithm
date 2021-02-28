# Single Number

## [문제보기](https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/)

```js
 var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};
```
