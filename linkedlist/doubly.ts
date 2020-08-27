/* const { NodeForDoubly } = require('./node'); */

class NodeOriginLL {
    data: number;
    next: any;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class NodeForDoubly extends NodeOriginLL {
    prev: any;
    constructor(data) {
        super(data);
        this.prev = null;
    }
}

class DoublyLinkedList {
    private head: any;
    private tail: any;
    private size: number;
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    public getHead = () => this.head;

    public getTail = () => this.tail;

    public isEmpty = () => this.size === 0 ? true : false;

    public getSize = () => this.size;

    public addHead = (data: number) => {
        let newNode = new NodeForDoubly(data);
        if (this.head === null && this.tail === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size += 1;
    }

    public addTail = (data: number) => {
        let newNode = new NodeForDoubly(data);
        if (this.head === null && this.tail === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }

    public removeHead = () => {
        if (this.head === null && this.tail === null) {
            console.log('List is already null');
            return null;
        } else if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size = 0;
        } else {
            let currentHead = this.head;
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead = null;
            this.size -= 1;
        }
    }

    public removeTail = () => {
        if (this.head === null && this.tail === null) {
            console.log('List is already null');
            return null;
        } else if (this.head === this.tail) {
            this.head = this.tail = null;
            this.size = 0;
        } else {
            let currentTail = this.tail;
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail = null;
            this.size -= 1;
        }
    }

    public findNode = (data: number) => {
        if (this.head === null && this.tail === null) return null;
        else {
            let current = this.head;
            while ((current !== null) && (current.data !== data)) {
                current = current.next;
            }
            return current;
        }
    }

    public sort = () => {
        let currentNode: any, nextNode: any;
        currentNode = this.head;
        while (currentNode !== this.tail) {
            nextNode = currentNode.next;
            while (nextNode !== null) {
                if (nextNode.data < currentNode.data) {
                    let t = nextNode.data;
                    nextNode.data = currentNode.data;
                    currentNode.data = t;
                }
                nextNode = nextNode.next;
            }
            currentNode = currentNode.next;
        }
    }

    public removeList = () => {
        if (this.head === null && this.tail === null) {
            return null;
        } else {
            let current;
            while (this.head !== null) {
                current = this.head;
                this.head = current.next;
                current = null;
                this.size -= 1;
            }
            this.tail = null;
        }
    }
}

const ll = new DoublyLinkedList();
for (let i = 0; i < 100; i++) {
    ll.addTail(Math.floor(Math.random() * 100));
}
ll.sort();
console.log(ll.getHead());