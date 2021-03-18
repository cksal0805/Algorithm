// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const result = [];
  // write your code in JavaScript (Node.js 8.9.4)
  const totalSum = A.reduce((a, b) => {
      return a+b;
  })
  A.reduce((a,b) => {
     result.push(Math.abs(totalSum - a - a));
     return a+b; 
  })
  result.sort((a,b) => a-b);
  return result[0];
}
