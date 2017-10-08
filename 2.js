// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let shop = 0;
    let results = [];
    let first = l1, second = l2;

    while(first.val !== null || second.val !== null || shop === 1){
        let v1 = first.val ? first.val : 0;
        let v2 = second.val ? second.val : 0;
        results.push( (v1 + v2 + shop)%10);
        shop = v1 + v2 + shop > 9 ? 1: 0;
        first = first.next ? first.next : { val : null };
        second = second.next ? second.next : { val : null };
    }

    return results;
};

var l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val:8,
                next: null
            }
        }
    }
}

var l2 = {
    val: 9,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
}

console.log(
    addTwoNumbers(l1, l2)
)