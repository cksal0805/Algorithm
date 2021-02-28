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