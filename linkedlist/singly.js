const { Node } = require("./node");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead = () => this.head;

  getTail = () => this.tail;

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  addHead(node) {
    let newNode = new Node(node);
    if (this.head === null && this.tail === null) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }

  removeHead() {
    if (this.head === null && this.tail === null) {
      console.log("List is already null");
    } else {
      if (this.size === 1) {
        this.head = this.tail = null;
        this.size = 0;
      } else if (this.size > 1) {
        let currentHead = this.head;
        let nodeAfterHead = currentHead.next;
        this.head = nodeAfterHead;
        currentHead = null;
        this.size -= 1;
      }
    }
  }

  addTail(node) {
    const newNode = new Node(node);
    if (this.head === null && this.tail === null) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  removeTail() {
    if (this.head === null && this.tail === null) {
      console.log("List is already null");
    } else {
      if (this.size === 1) {
        this.head = this.tail = null;
        this.size = 0;
      } else if (this.size > 1) {
        let currentHead = this.head;
        let prev = null;
        while (currentHead.next) {
          prev = currentHead;
          currentHead = currentHead.next;
        }
        if (prev !== null) {
          console.log("SinglyLinkedList -> removeTail -> prev", prev);
          prev.next = null;
          this.tail = prev;
          currentHead = null;
          this.size -= 1;
        }
      }
    }
  }

  findNode(data) {
    if (this.head === null && this.tail === null) {
      console.log("List is already null");
    } else {
      let currentHead = this.head;
      while (currentHead !== null && currentHead.data !== data) {
        currentHead = currentHead.next;
      }
      return currentHead;
    }
  }

  sort() {
    let currentNode, nextNode;
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

  removeList() {
    if (this.head === null && this.tail === null) {
      console.log("List is already null");
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

module.exports = SinglyLinkedList;
