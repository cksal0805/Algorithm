function solution(A) {
  A.sort((a, b) => {
      return a-b;
  });
  for (let i = 1; i <=A.length; i++) {
      if(A[i-1] !== i) {
          return i
      }
  }
  return A.length+1;
}
