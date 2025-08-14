class LinkedListNode {
    private value: number;
    private next: LinkedListNode|null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: LinkedListNode;
    private tail: LinkedListNode;
    private length: number;

    constructor(value: number) {
        const newNode = new LinkedListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}

const linkedList = new LinkedList(4);
console.log(linkedList);