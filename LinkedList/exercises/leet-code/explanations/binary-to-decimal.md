# Binary to Decimal

This method converts a binary number represented by the linked list to its decimal equivalent.

Let's break down the code step-by-step:

### Step 1: Initialize Variables

```javascript
let num = 0;
let current = this.head;
```

- `num`: This variable will store the decimal representation of the binary number. Initialized to zero.
- `current`: This variable points to the head node of the linked list initially. We'll traverse the list using this pointer.

### Step 2: Loop Through the Linked List

```javascript
while (current !== null) {
    num = num * 2 + current.value;
    current = current.next;
}
```

- The `while` loop continues until `current` becomes `null`, meaning we have reached the end of the linked list.

- nside the loop:

1. `num = num * 2 + current.value;`: This line does the binary to decimal conversion. Each digit in a binary number represents a power of 2. So, we multiply the existing decimal (`num`) by 2 (essentially shifting all bits to the left by 1) and add the binary digit (`current.value`) at the current position in the linked list.

2. `current = current.next;`: This moves the pointer to the next node in the list.

### Step 3: Return the Result

```javascript
return num;
```

- The final value of `num` is returned, representing the decimal equivalent of the binary number stored in the linked list.

## Summary

The method traverses the linked list node by node, considering each node value as a binary digit. It constructs the decimal number by doubling the existing decimal and adding the new binary digit, from the most significant bit (MSB) to the least significant bit (LSB). Finally, it returns the decimal number.

## Code with inline comments:

```javascript
// Define the binaryToDecimal function for the LinkedList class
binaryToDecimal() {
    // Initialize variable 'num' to 0. This will store the final decimal value.
    let num = 0;
 
    // Initialize 'current' to point to the head of the linked list.
    // 'current' will be used to traverse through the list.
    let current = this.head;
 
    // Loop through each node in the linked list until 'current' is null.
    // If 'current' is null, it means we have reached the end of the list.
    while (current !== null) {
        
        // Perform binary to decimal conversion for the current digit.
        // Multiply 'num' by 2 to shift its binary value one place to the left,
        // and add the value of the current node ('current.value').
        // This constructs the binary number in a left-to-right fashion.
        num = num * 2 + current.value;
 
        // Move 'current' to the next node in the list,
        // so that the loop can continue to the next digit.
        current = current.next;
    }
    
    // Return the final decimal value stored in 'num' after
    // converting the entire binary number.
    return num;
}
```

## Explanation Using Decimal as an Analogy:

**Constructing a Decimal Number: 123**

**Concept:** Every position in a decimal number represents a power of 10, starting from the rightmost position as 100100 (which is 1) and increasing to the left.

1. **Initialize:**

- Start with a result of `0`.

2. **Process the leftmost digit (1):**

- Multiply the current result by 10 (since we're in base 10): `result = 0 * 10 = 0`

- Add the current digit: `result = 0 + 1 = 1`

3. **Process the next digit (2):**

- Multiply the current result by 10: `result = 1 * 10 = 10`

- Add the current digit: `result = 10 + 2 = 12`

4. **Process the rightmost digit (3):**

- Multiply the current result by 10: `result = 12 * 10 = 120`

- Add the current digit: `result = 120 + 3 = 123`

5. **Conclusion:**

- At the end of this process, we've constructed the decimal number `123`.

Now, let's construct a binary number using the same method. We'll use the binary number 110 as an example.

**Constructing a Binary Number: 110**

**Concept:** Every position in a binary number represents a power of 2, starting from the rightmost position as 2020 (which is 1) and increasing to the left.



1. **Initialize:**

- Start with a result of `0`.

2. **Process the leftmost binary digit (1):**

- Multiply the current result by 2 (since we're in base 2): `result = 0 * 2 = 0`

- Add the current binary digit: `result = 0 + 1 = 1`

3. **Process the next binary digit (1):**

- Multiply the current result by 2: `result = 1 * 2 = 2`

- Add the current binary digit: `result = 2 + 1 = 3`

4. **Process the rightmost binary digit (0):**

- Multiply the current result by 2: `result = 3 * 2 = 6`

- Add the current binary digit: `result = 6 + 0 = 6`

5. **Conclusion:**

- At the end of this process, we've converted the binary number `110` into the decimal number `6`.

Both of these step-by-step processes follow the general principle of constructing numbers in positional notation. The only difference between them is the base: base-10 for decimal and base-2 for binary.
