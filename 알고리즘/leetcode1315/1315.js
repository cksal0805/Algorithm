var sumEvenGrandparent = function(root) {
  let answer = 0;
  const check = (node, p, grandP) => {
      if (node === null) {
        return;
      }
      if (grandP && grandP%2 === 0) {
        answer += node.val;
      }
      check(node.left, node.val, p);
      check(node.right, node.val, p);
  }
  check(root, null, null);
  return answer;
};

// 왼쪽 오른쪽 탐색 하면서 조부모가 있나?
// 조부모가 even-value 인가? checking 해서 sum
// 그럼 짝수 조부모 가진 value가 부모 그럼 이제 그 부모가 조부모가 됨.
