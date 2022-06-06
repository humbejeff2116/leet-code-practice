/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let listTotal = 0;
    let remainder;
    let middle;
    let i = 1;
    let tempHead = head;
    
    while (head) {
        listTotal += 1;
        head = head.next;
    }
    
    head = tempHead;
    remainder = listTotal % 2;
    middle = listTotal / 2;

    if (!remainder) { 
        for (i; !(i > middle); i++) {
            if(i === middle) {
                head = head.next;
                break;
            }
            head = head.next	
        } 
    } else {
        for (i; !(i > middle); i++) {
            if(i === middle) {
                break;
            }
            head = head.next;	
        }  
    }
    return head;
};
