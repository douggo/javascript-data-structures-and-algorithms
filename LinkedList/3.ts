class LinkedListNode {
    public value: number;
    public next!: LinkedListNode|null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    public head: LinkedListNode|null;
    public tail: LinkedListNode|null;
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

    pop(): number {
      let previousNode: LinkedListNode|null = this.head;
      let currentNode: LinkedListNode|null = this.head;
      let poppedValue: number = 0;

      if (!previousNode || !currentNode) {
        return -1;
      }

      if (!currentNode.next) {
        poppedValue = currentNode.value;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return poppedValue;
      }

      while (previousNode.next !== null) {
        if (!currentNode.next) {
          this.tail = previousNode;
          this.tail.next = null;
          this.length--;
          poppedValue = currentNode.value;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
      return poppedValue;
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
    console.log("Pop: " + linkedList.pop());
  }
}

const linkedList = new LinkedList(1);
pushToLinkedList(linkedList);
linkedList.print();
popValuesFromLinkedList(linkedList);
linkedList.print();