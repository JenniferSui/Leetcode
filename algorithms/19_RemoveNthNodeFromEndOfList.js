/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var list = [];
    while (head) {
        list.push (new ListNode(head.val));
        head = head.next;
    }

    list.splice(-n, 1);

    for (var i = 0; i < list.length; i++) {
        list[i].next = list[i+1];
    }

    return list.length === 0 ? null : list[0];
};