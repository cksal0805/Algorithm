## maxinum-subarry

### 문제

https://leetcode.com/problems/maximum-subarray/submissions/

### 난이도

easy

```python
class Solution(object):
  def maxSubArray(self, nums):
    result = nums[0]
    sum_value = 0
    for i in range(len(nums)):
        sum_value += nums[i]
        result = max(sum_value, result)
        if sum_value < 0:
            sum_value = 0
    return result
```
