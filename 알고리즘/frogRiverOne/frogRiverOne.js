// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  const RiverSet = new Set();
  for (let i = 0; i < A.length; i++) {
      RiverSet.add(A[i]);
      if (RiverSet.size === X) {
          return i;
      }
  }
  return -1;
}
