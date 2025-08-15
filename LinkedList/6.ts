class LinkedListNode {
    public value: number;
    public next: LinkedListNode|null = null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    public head: LinkedListNode|null = null;
    public tail: LinkedListNode|null = null;
    public length: number = 0;

    constructor(value: number) {
      const newNode = new LinkedListNode(value);
      this.initializeLinkedList(newNode);
    }

    public push(value: number): LinkedList {
      const newNode: LinkedListNode = new LinkedListNode(value);
      if (!this.head) {
        this.initializeLinkedList(newNode);
      } else {
        this.addAtEnd(newNode);
      }
      return this;
    }

    public pop(): LinkedListNode|null {
      if (!this.head || !this.tail) {
        return null;
      }

      let previousNode: LinkedListNode|null = this.head;
      let currentNode: LinkedListNode|null = this.head;

      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      this.tail = previousNode;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return currentNode;
    }

    public unshift(value: number): LinkedList {
      const newNode = new LinkedListNode(value);
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    public shift(): LinkedListNode|null {
      if (!this.head || !this.tail) {
        return null;
      }
      const currentNode: LinkedListNode = this.head;
      this.head = this.head.next;
      currentNode.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentNode;
    }

    public get(index: number): LinkedListNode|null {
      if (index < 0 || index >= this.length) {
        return null;
      }
      let currentNode: LinkedListNode|null = this.head;
      for (let i: number = 0; i < index; i++) {
        currentNode = currentNode!.next;
      }
      return currentNode;
    }

    public print(): void {
      let currentNode: LinkedListNode|null = this.head;
      let str: string = '';
      while (currentNode !== null) {
        str += (str ? ', ' : '') + currentNode.value;
        currentNode = currentNode.next;
      }
      console.log("LinkedList: [" + str + "]");
    }

    public printReversed(): void {
      const reversed = "LinkedList: [" + this.getReversedLinkedList(this.head) + "]";
      console.log(reversed);
    }

    private initializeLinkedList(newNode: LinkedListNode): void {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }

    private addAtEnd(newNode: LinkedListNode): void {
      if (!this.tail) {
        console.log(`Tail doesn't exists!`);
        return;
      }
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    }

    private getReversedLinkedList(currentNode: LinkedListNode|null): string {
      if (!currentNode) {
        return '';
      }
      const rest = this.getReversedLinkedList(currentNode.next);
      return rest ? `${rest}, ${currentNode.value}` : `${currentNode.value}`;
    }
}

function pushToLinkedList(linkedList: LinkedList): void {
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(7);
  linkedList.push(8);
  linkedList.push(9);
  linkedList.push(10);
}

function popValuesFromLinkedList(linkedList: LinkedList): void {
  const linkedListLengthPlusOne: number = linkedList.length + 1;
  for(let i: number = 1; i <= linkedListLengthPlusOne; i++) {
    console.log(linkedList);
    console.log(linkedList.pop());
  }
}

function unshiftValuesToLinkedList(linkedList: LinkedList): void {
  linkedList.unshift(1);
  linkedList.unshift(2);
}

function shiftValuesFromLinkedList(linkedList: LinkedList): void {
  const linkedListLengthPlusOne = linkedList.length + 1;
  for (let i: number = 1; i <= linkedListLengthPlusOne; i++) {
    console.log(linkedList);
    console.log(linkedList.shift());
  }
}

const linkedList = new LinkedList(1);
pushToLinkedList(linkedList);
linkedList.print();
console.log(linkedList.get(9));