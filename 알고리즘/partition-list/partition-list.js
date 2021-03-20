/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
  const left = new ListNode();
  const right = new ListNode();
  let current = head;
  let currentLeft = left;
  let currentRight = right;
  
  while(current) {
      if (current.val < x) {
          currentLeft = currentLeft.next = current;
      } else {
          currentRight = currentRight.next = current;
      }
      current = current.next;
  }
  currentLeft.next = right.next;
  currentRight.next = null;
  return left.next;
};