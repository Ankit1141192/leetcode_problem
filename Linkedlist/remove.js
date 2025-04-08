// Remove Nth Node From End of List
//Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Approach:1. Initialize two pointers, fast and slow, both pointing to the head of the linked list.
// 2. Move the fast pointer n steps ahead in the list.
// 3. Move both fast and slow pointers until the fast pointer reaches the end of the list.
// 4. At this point, the slow pointer will be pointing to the node just before the one we want to remove.
// 5. Change the next pointer of the slow node to skip the nth node from the end.
// 6. Return the head of the modified linked list.
// Definition for singly-linked list.

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let prev = null;
    let count = 0;
    while (count < n) {
        fast = fast.next;
        count++;
    }
    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    if (prev) {
        prev.next = slow.next;
    } else {
        head = head.next;
    }
    return head;
    
};