function solution(A, K) {
  if(A.length === 0 || K === 0) {
    return A;
  }
  for(let i = 0; i < K; i++) {
      const popValue = A.pop();
      A.unshift(popValue);
  }
  return A;
}
