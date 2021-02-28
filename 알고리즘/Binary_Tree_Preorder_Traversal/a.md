# Binary Tree Preorder Traversal

- 문제 보기: [Binary_Tree_Preorder_Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/);
- 난이도: Medium

## 문제 풀이

왼쪽 오른쪽 노드를 검사해서 노드를 순서대로 이어 붙여주기만 하면 코드는 끝난다.

## 문제 코드

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const DFS = (root) => {
  if (root === null) return [];
  const left = DFS(root.left);
  const right = DFS(root.right);
  return [root.val].concat(left).concat(right);
};

function preorderTraversal(root){
  return DFS(root);
} 
```
