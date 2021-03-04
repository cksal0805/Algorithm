function solution(arrA, arrB) {
  const lastIndex = arrA.length - 1;
  for(let i = 0; i < arrA.length; i++) {
      const lastData = arrA[lastIndex]
      arrA.pop();
      arrA.unshift(lastData);
      if(JSON.stringify(arrA) === JSON.stringify(arrB)) {
          return true;
      }
  }
  return false;
}