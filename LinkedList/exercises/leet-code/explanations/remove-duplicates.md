# Remove Duplicates

The `removeDuplicates()` function is used to **remove duplicate nodes** from a linked list.  
It traverses the list and removes nodes with duplicate values while maintaining the relative order of the remaining nodes.

## Step-by-step explanation of the logic

1. Create a `Set` named `values` to store the unique values of the linked list nodes.  
2. Initialize two pointers:  
   - `previous`, initially set to `null`  
   - `current`, pointing to the head of the linked list  
3. Iterate through the linked list using a `while` loop that continues as long as `current` is not `null`:  
   a. Check if `values` contains the current node’s value.  
      - If **yes**, it means the node is a duplicate:  
        - Update `previous.next` to point to `current.next` (skipping the duplicate node).  
        - Decrement the list length by 1.  
   b. If **no**, the value is unique:  
      - Add the value to the `Set`.  
      - Update `previous` to point to the current node.  
   c. Move the `current` pointer to the next node.  

**Complexity:**  
- **Time Complexity:** O(n), where `n` is the number of nodes in the list (since each node is visited once).  
- **Space Complexity:** O(n), because a `Set` is used to store unique values.  

---

## Code with inline comments

```js
removeDuplicates() {
  // Create a Set to store unique values
  const values = new Set();
  // Initialize previous pointer as null
  let previous = null;
  // Initialize current pointer at head
  let current = this.head;

  // Iterate through the list
  while (current !== null) {
    // If value already exists in the set
    if (values.has(current.value)) {
      // Remove the duplicate node by updating previous' next
      previous.next = current.next;
      // Decrement list length
      this.length -= 1;
    } else {
      // Add unique value to the set
      values.add(current.value);
      // Update previous pointer to current node
      previous = current;
    }
    // Move current pointer to the next node
    current = current.next;
  }
}
```
