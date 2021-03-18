function solution(N, A) {
  let lastMax = 0;
  let max = 0;
  const reSet = new Array(N).fill(0);
  A.forEach((element, i) => {
      if(element < N+1) {
          if(reSet[element-1] < lastMax) {
              reSet[element-1] = lastMax;
          } 
          reSet[element-1]++;
          if(max < reSet[element-1]) {
              max = reSet[element-1];
          }
      } else {
          lastMax = max;
      }
  })
  for(let i = 0; i < N; i++) {
      if(reSet[i] < lastMax) {
          reSet[i] = lastMax
      }
  }
  return reSet;
}
