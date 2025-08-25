class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
	
    //   +===================================================+
    //   |               WRITE YOUR CODE HERE                |
    //   | Description:                                      |
    //   | - This method converts a binary number,           |
    //   |   represented as a linked list, to a decimal int. |
    //   |                                                   |
    //   | Return type: int                                  |
    //   | - Returns the decimal equivalent of the binary    |
    //   |   number.                                         |
    //   |                                                   |
    //   | Tips:                                             |
    //   | - We use a while loop to traverse the linked list.|
    //   | - Multiply the current sum by 2 and add the value |
    //   |   at each node to get the decimal number.         |
    //   +===================================================+
    /** 
     * Pseudo Code:
     *  1. Start with a variable called 'num' and set it to 0.
     *    This will store our resulting decimal number.
     *  2. Create a pointer called 'current' and set it to point to the start of the linked list (the head).
     *  3. Begin a loop. Continue this loop as long as 'current' is not pointing to nothing (i.e., as long as we haven't reached the end of the list).
     *    a. Inside the loop, the first step is to double the current value of 'num'.
     *      This is like making space for the next binary digit.
     *      Imagine we are reading a binary number from left to right.
     *      Each time we move to the next position, we're shifting everything to the left, which is equivalent to doubling in the binary system.
     *    b. Add the value of the node that 'current' is pointing to, to 'num'.
     *      This value will be either 0 or 1 since it's a binary digit.
     *      Now 'num' contains the accumulated value up to the current binary digit.
     *    c. Move the 'current' pointer to the next node in the list to continue the loop for the next binary digit.
     *  4. Once the loop finishes (we've processed all binary digits), return the value of 'num' which now contains the decimal 
     *      representation of the binary number in the linked list.
     */
    binaryToDecimal() {
      if (!this.head) {
          return 0;
      }
      let currentNode = this.head;
      let decimalValue = 0;
      while (currentNode !== null) {
          decimalValue = (decimalValue * 2) + currentNode.value;
          currentNode = currentNode.next;
      }
      return decimalValue;
    }
}





// ---------------
// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log("Convert 1011 to 11:");
console.log("Input: 1 -> 0 -> 1 -> 1");
console.log("Output: ", list1.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log("Convert 1100 to 12:");
console.log("Input: 1 -> 1 -> 0 -> 0");
console.log("Output: ", list2.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log("Convert 1 to 1:");
console.log("Input: 1");
console.log("Output: ", list3.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log("Convert empty list to 0:");
console.log("Input: empty");
console.log("Output: ", list4.binaryToDecimal());
console.log("---------------");


