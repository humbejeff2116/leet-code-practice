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


//more prfomant and low memory consumption solution
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
    let slow = head;
    let fast = head;
    
    // ODD number of nodes:
    
    // first step:
    //     s  f
    // [1, 2, 3, 4, 5]
    
    // second step:
    //        s     f
    // [1, 2, 3, 4, 5]
    
    // EVEN number of nodes:
    
    // first step:
    //     s  f
    // [1, 2, 3, 4]
    
    // second step:
    //        s     f
    // [1, 2, 3, 4]
    
    // fast node will always move 2 nodes each iteration
    // slow node will move 1 node each iteration
    
    
    // check to make sure fast node is not the last node
    while (fast !==null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
