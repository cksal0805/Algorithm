/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const arr = makeArr(n);
  return makeCombination(arr, k);
};
const makeCombination = (arr, num) => {
  let result = [];
  if(num == 1) return arr.map(e => [e]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  arr.forEach((e,i,array) => {
    let rest = array.slice(i+1);
    let combinations = makeCombination(rest,num-1);
    let combiArr = combinations.map(x => [e, ...x])
    result.push(...combiArr);
  }) 
  return result;
}
const makeArr = (number) => {
  const arr = [];
  for(let i = 1; i<=number; i++) {
    arr.push(i);
  }
  return arr;
}