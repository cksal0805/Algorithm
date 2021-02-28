# 예상대진표

- 프로그래머스 2단계 문제
- [문제바로가기](https://programmers.co.kr/learn/courses/30/lessons/12985)

## 문제풀이

```js
function solution(n,a,b){
    var answer = 0;
    
  while(a!=b){
      a = Math.ceil(a /2);
      b = Math.ceil(b /2);
      answer = answer + 1;
  }

  return answer
}
```

## 문제해설

각 a,b가 이긴다고 정해져 있으니 한라운드를 지날때마다 각 a,b가 부여 받게 될 번호는 기존 번호에서 나누기2를 한 값의 몫이 될 것이다.
라운드가 끝날때마다 answer의 값을 1씩 증가시켜준다.
