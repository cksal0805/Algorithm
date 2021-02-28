# Comniations

## 문제 풀이

조합을 구하는 원리
4C3
[1, 2, 3, 4]
> 시작
  1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
  [1, 2, 3] [1, 2, 4] [1, 3, 4]
  2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
  [2, 3, 4]
  3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다.
  []
  4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
  []
  종료

## 문제 해설

```js
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
```
