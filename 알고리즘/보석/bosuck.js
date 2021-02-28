function solution(gems) {
  const gems_length = gems.length;
  let answer = [0, gems.length - 1];
  const gem_kinds = new Set(gems);
  const gems_box = new Map();

  let start,end = 0;

  gems_box.set(gems[0],1);

  while ( start <= end && end < gems_length ){
    if (gems_box.size === gem_kinds.size) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      if (end - start === answer[1] - answer[0]) {
        if (start < answer[0]) {
          answer = [start, end];
        }
      }
      if (gems_box.get(gems[start]) > 1) {
        gems_box.set(gems[start], gems_box.get(gems[start]) - 1);
      } else {
        gems_box.delete(gems[start])
      }
      start+=1;
    }
    else {
      end+=1;
      gems_box.set(gems[end], 1 + (gems_box.get(gems[end]) || 0));
    }
  }
  return [answer[0] + 1, answer[1] + 1];
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])