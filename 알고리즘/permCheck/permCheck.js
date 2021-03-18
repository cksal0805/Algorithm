function solution(A) {
  A.sort((a, b) => a-b);
  for(let i = 0; i < A.length; i++) {
    if(A[i] - 1 !== i) {
      return 0;
    }
  }
  return 1;
}
