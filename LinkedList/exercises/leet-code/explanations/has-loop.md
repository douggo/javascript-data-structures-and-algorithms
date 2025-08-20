# Has Loop?

The `hasLoop()` function is used to detect if a linked list contains a loop (cycle).  
It also utilizes the **"tortoise and hare"** algorithm.

## Step-by-step explanation of the logic

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.  
2. Traverse the linked list using a `while` loop. The loop continues as long as `fast` is not `null` (i.e., it has not reached the end of the list), and `fast.next` is also not `null` (i.e., there is at least one more node after the current `fast` node).  
3. Inside the loop, move the `slow` pointer one step forward (`slow = slow.next`) and the `fast` pointer two steps forward (`fast = fast.next.next`).  
4. Check if the `slow` and `fast` pointers have become equal. If they have, it means there is a loop in the linked list, and the function returns `true`.  
5. If the loop terminates without the `slow` and `fast` pointers becoming equal, it means the linked list has no loop, and the function returns `false`.

**How it works:** Because the pointers move at different speeds, if there is a loop, the faster pointer (the hare) will eventually catch up to the slower pointer (the tortoise) inside the loop. If there is no loop, the faster pointer will reach the end of the list.

---

## Code with inline comments

```js
// Define 'hasLoop' to check for cycles in linked list
hasLoop() {
  // Initialize 'slow' and 'fast' pointers at the head node
  // 'slow' will move 1 step at a time
  // 'fast' will move 2 steps at a time
  let slow = this.head;
  let fast = this.head;

  // Continue loop if 'fast' pointer and 'fast.next'
  // are not null. This also prevents errors
  while (fast !== null && fast.next !== null) {
    // Move 'slow' 1 step forward in the list
    slow = slow.next;

    // Move 'fast' 2 steps forward in the list
    fast = fast.next.next;

    // Check if 'slow' and 'fast' pointers meet
    if (slow === fast) {
      // If they meet, it confirms a loop
      // Return true to indicate a loop
      return true;
    }
  }

  // If loop ends without meeting of pointers,
  // it confirms absence of loop in the list
  return false;
}
