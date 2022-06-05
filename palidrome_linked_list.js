/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let listVal = [];
    
    while(head) {
        listVal.push(head.val)
        head = head.next
    }
    let listValLen = listVal.length;
    let i = 0
    for (i; i < listValLen; i++) {
        if (listVal[i] !== listVal[listValLen - i - 1]) {
            return false;
        }
    }
    
    return true;   
};
