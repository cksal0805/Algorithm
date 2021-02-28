function solution(number, k) {
  let stack = [];
  for(let i = 0; i < number.length; i++){
    let now = number[i];
    while(k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  stack.splice(stack.length - k, k);
  const answer = stack.join('');

  return answer;
}