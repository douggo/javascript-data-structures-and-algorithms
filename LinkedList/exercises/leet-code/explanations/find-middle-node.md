# Find Middle Node

The `findMiddleNode()` function uses the **"tortoise and hare"** algorithm to find the middle node of a linked list.

### Step-by-step explanation of the logic:

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.  
2. Traverse the linked list using a `while` loop. The loop continues as long as `fast` is not `null` (i.e., it has not reached the end of the list), and `fast.next` is also not `null` (i.e., there is at least one more node after the current `fast` node).  
3. Inside the loop, move the `slow` pointer **one step forward** (`slow = slow.next`) and the `fast` pointer **two steps forward** (`fast = fast.next.next`).  
4. Since the `fast` pointer moves twice as fast as the `slow` pointer, by the time the `fast` pointer reaches the end of the list or goes beyond it, the `slow` pointer will be at the middle node.  
5. When the loop terminates, return the `slow` pointer, which now points to the middle node.  

> **Note**:
> - For an **even number of nodes**, the `fast` pointer will reach the end of the list, while the `slow` pointer will point to the **first middle node** (the one closer to the head).
> - For an **odd number of nodes**, the `fast` pointer will go beyond the end of the list, and the `slow` pointer will point to the **exact middle node**.  

---

### Code with inline comments:

```js
findMiddleNode() {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Iterate through the list
    while (fast !== null && fast.next !== null) {
        // Move slow pointer one step
        slow = slow.next;
        // Move fast pointer two steps
        fast = fast.next.next;
    }

    // Return middle node when fast reaches end
    return slow;
}
```
