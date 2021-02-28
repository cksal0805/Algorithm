function solution(progresses, speeds) {
  let answer = [0];
  let days = [];
  for(let i = 0; i < progresses.length; i++) {
      let count = 0;
      while (progresses[i] < 100) {
          progresses[i] += speeds[i];
          count++;
      }
      days.push(count);
  }
  let maxDay = days[0];
  for(let i = 0, j = 0; i < days.length; i++) {
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
      }
  }
  return answer;
}
