function solution(n, costs) {
  let answer = 0;
  let parent = [];
  let count = 0;

  for(let i = 0; i < n; i++){
      parent.push(i);
  }
  costs.sort((a, b) => a[2] - b[2]);

  for(let i = 0; i < costs.length; i++){
      let a = findParent(parent, costs[i][0]);
      let b = findParent(parent, costs[i][1]);
      if(a != b){
          if(a < b){
              parent[b] = a;
          }else{
              parent[a] = b;
          }
          count++;
          answer += costs[i][2];
      }
      if(count == n - 1){
          break;
      }
  }
  return answer;
}

function findParent(parent, a){
  if(parent[a] === a){
      return a;
  }
  return parent[a] = findParent(parent, parent[a]);
}