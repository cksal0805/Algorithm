function solution(A) {
  const mySet = new Set();
  for(let i in A) {
      if(!mySet.has(A[i])) {
          mySet.add(A[i]);
      } else {
          mySet.delete(A[i]);
      }
  }
  const result = [...mySet];
  return result[0];
}
