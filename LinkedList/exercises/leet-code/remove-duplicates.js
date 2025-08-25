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
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
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
	/* Create a while and another while inside the first while */
	removeDuplicates() {
	    let currentNode = this.head;
	    let runner = this.head;
	    while (currentNode !== null) {
	        let runner = currentNode;
	        
	        while (runner.next !== null) {
	            if (runner.next.value === currentNode.value) {
	                runner.next = runner.next.next;
	                this.length--;
	            } else {
	                runner = runner.next;
	            }
	        }
	        currentNode = currentNode.next;
	    }
	}

  /**
   * 1. Create an empty set called values
   * 2. Initialize previous pointer to null
   * 3. Initialize current pointer to the head of the list
   * 4. Loop while current pointer is not null
   *  a. If the value of the current node is in the values set
   *    i. Set the next of the previous pointer to the next of the current pointer
   *    ii. Decrease the list length by 1
   * b. Else
   *    i. Add the value of the current node to the values set
   *   ii. Update previous pointer to the current pointer
   * c. Move current pointer one step ahead in the list
   */
  removeDuplicatesWithSet() {
    const values = new Set();
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode !== null) {
        if (values.has(currentNode.value)) {
            previousNode.next = currentNode.next;
            this.length--;
        } else {
            values.add(currentNode.value);
            previousNode = currentNode;
        }
        currentNode = currentNode.next;
    }
  }
	

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);


console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();



/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/

