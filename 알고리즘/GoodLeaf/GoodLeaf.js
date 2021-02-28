var countPairs = function(root, distance) {
  // [1,2, 3, null, 4]
  let result = 0;
  function DFS(node) {
      if(!node) return null;
      if(!node.left && !node.right) return [1];

      const left = DFS(node.left); // 왼쪽 탐색
      const right = DFS(node.right); // 오른쪽 탐색
      
      if(!node.left || !node.right) {
          if(left) return left.map(v => v + 1);
          return right.map(v => v + 1)
      }
      
      for(let lt of left) {
          for(let rt of right) {
              if(lt + rt <= distance) result++;
          }
      }
      return [...left, ...right].map(v => v + 1);
  }
  DFS(root);
  return result;
};