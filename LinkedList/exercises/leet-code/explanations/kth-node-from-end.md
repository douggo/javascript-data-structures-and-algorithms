# Find Kth node from end

The `findKthFromEnd(k)` function is used to find the **kth node from the end** of a linked list.  
It uses two pointers to traverse the list.

## Step-by-step explanation of the logic

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.  
2. Move the `fast` pointer `k` steps forward in the list using a `for` loop.  
   - If `fast` becomes `null` before reaching `k` steps, it means the linked list has fewer than `k` nodes, and the function returns `null`.  
3. Traverse the linked list using a `while` loop. The loop continues as long as the `fast` pointer is not `null`.  
4. Inside the loop, move both the `slow` and `fast` pointers **one step forward** (`slow = slow.next` and `fast = fast.next`).  
5. When the loop terminates, the `fast` pointer has reached the end of the list.  
   - Since the `fast` pointer started `k` steps ahead of the `slow` pointer, the `slow` pointer now points to the **kth node from the end** of the list.  
6. Return the `slow` pointer, which now points to the kth node from the end.  

**Efficiency:**  
The two-pointer technique ensures the linked list is traversed only once, making the algorithm efficient with a time complexity of **O(n)**, where `n` is the number of nodes in the list.

---

## Code with inline comments

```js
findKthFromEnd(k) {
  // Initialize slow and fast pointers at head
  let slow = this.head;
  let fast = this.head;

  // Move fast pointer k steps ahead
  for (let i = 0; i < k; ++i) {
    // If fast reaches null, k is out of range
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  // Iterate until fast reaches the end
  while (fast !== null) {
    // Move slow and fast pointers one step
    slow = slow.next;
    fast = fast.next;
  }

  // When fast reaches end, slow is at kth from end
  return slow;
}
```
