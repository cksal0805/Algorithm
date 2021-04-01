function solution(S) {
  const checkSet = (str) => {
      if (str === ')') {
          return '(';
      } else if (str === ']') {
          return '[';
      } else if (str === '}') {
          return '{';
      }
  }
  const stack = [];
  for (let i = 0; i < S.length; i++) {
     if (S[i] === '(' || S[i] === '[' || S[i] === '{') {
        stack.push(S[i]);
     } else {
         if (checkSet(S[i]) === stack[stack.length - 1]) {
            stack.pop(S[i]); 
         } else {
             return 0;
         }
     }
  }
  return stack.length > 0 ? 0 : 1;
}
