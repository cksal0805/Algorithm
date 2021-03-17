function solution(X, Y, D) {
  if(Y === X) {
      return 0;
  }
  if(Y <= D) {
      return 1;
  }
  const a = parseInt((Y - X) / D)
  const b = (Y - X) % D
  if(b !== 0) {
     return a + 1
  } else {
      return a
  }
}

