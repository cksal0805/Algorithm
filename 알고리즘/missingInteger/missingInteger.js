function solution(A) {
  A.sort((a, b) => {
      return a-b;
  });
  let min = 1;
  for(let i in A) {
      if(A[i] === min) {
          min++;
      }
  }
  return min;
}
