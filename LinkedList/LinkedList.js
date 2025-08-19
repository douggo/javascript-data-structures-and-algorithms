class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        
        return this;
    }

    pop() {
        if (!this.head || !this.tail) {
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while(currentNode.next) {
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

    unshift(value) {
        const newNode = new Node(value);
        
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

    shift() {
        if (!this.head || !this.tail) {
            return;
        }
        
        let shiftedNode = this.head;
        this.head = this.head.next;
        shiftedNode.next = null;
        this.length--;
        
        if (this.length === 0) {
            this.tail = null;
        }
        
        return shiftedNode;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }

    set(index, value) {
        const selectedNode = this.get(index);
        if (!selectedNode) {
            return;
        }
        selectedNode.value = value;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return this.push(value);
        }
        if (index === 0) {
            return this.unshift(value);
        }
        
        const newNode = new Node(value);
        const previousNode = this.get(index - 1);
        
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }
        
        const previousNode = this.get(index - 1);
        const posteriorNode = previousNode.next;
        
        previousNode.next = posteriorNode.next;
        posteriorNode.next = null;
        this.length--;
        
        return posteriorNode;
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let previousNode = null;
        let posteriorNode = currentNode.next;

        for (let i = 0; i < this.length; i++) {
            posteriorNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = posteriorNode;
        }

        return this;
    }

    print() {
        let currentNode = this.head;
        let string = '';

        while(currentNode) {
            string += (string ? ', ' : '') + currentNode.value;
            currentNode = currentNode.next;
        }

        console.log(`[${string}]`);
    }
}

let ll = null;
ll = new LinkedList(0);
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);