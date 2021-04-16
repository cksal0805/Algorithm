// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const Aone = [...A];
  const Atwo = [...A]
  let counterA = 0;
  let counterB = 0;
  
  for(let i = 0; i < A.length - 1; i++) {
      if(Aone[0] === 1) {
          counterA++;
          Aone[0] = 0;
      }
      if(Aone[i] === Aone[i+1] && Aone[i] === 0) {
          counterA++;
          Aone[i+1] = 1
      } else if(Aone[i] === Aone[i+1] && Aone[i] === 1) {
          counterA++;
          Aone[i+1] = 0;
      }
  }
  for(let i = 0; i < A.length - 1; i++) {
      if(Atwo[0] === 0) {
          counterB++;
          Atwo[0] = 1;
      }
      if(Atwo[i] === Atwo[i+1] && Atwo[i] === 0) {
          counterB++;
          Atwo[i+1] = 1
      } else if(Atwo[i] === Atwo[i+1] && Atwo[i] === 1) {
          counterB++;
          Atwo[i+1] = 0;
      }
  } 
  
  return Math.min(counterA,counterB);
}
