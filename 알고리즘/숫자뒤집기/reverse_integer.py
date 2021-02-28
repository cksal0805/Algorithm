class Solution:
  def reverse(self, x: int) -> int:
    max_size = pow(2,31)
    reverseX = 0
    if x < 0:
      x = (-x)
      reverseX = -(int(str(x)[::-1]))
    else:
      reverseX = int(str(x)[::-1])
    if -(max_size) < reverseX < max_size-1:
      return reverseX
    else:
      return 0