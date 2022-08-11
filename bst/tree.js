const Node = require("./node");

/*
  Cây nhị phân là cây có gốc và 1 nút cha chỉ có 2 nút con
  Độ phức tạp trung bình:
    - search: O(logN) 
    - insert: O(logN)
    - delete: O(logN)
  Độ phức tạp xấu:
    - O(N)
*/

class Tree {
  constructor(data) {
    this.root = new Node(data);
    this.size = 1;
  }

  getSize = () => this.size;

  insert = (data) => {
    const visit = (node) => {
      if (data < node.data) {
        if (node.left) visit(node.left);
        else node.left = newNode;
      } else {
        if (node.right) visit(node.right);
        else node.right = newNode;
      }
    };

    let newNode = new Node(data);
    visit(this.root);
    this.size++;
  };

  contains = (data) => {
    if (!this.root) return;

    let found = false;
    const visit = (node) => {
      if (data === node.data) found = true;

      if (data < node.data) {
        if (node.left) visit(node.left);
      } else {
        if (node.right) visit(node.right);
      }
    };
    visit(this.root);
    return found;
  };

  delete = (node, data) => {
    if (!node) return;
    else if (data < node.data) node.left = this.delete(node.left, data);
    else if (data > node.data) node.right = this.delete(node.right, data);
    else {
      // case 1: xóa node lá
      if (node.left === null && node.right === null) node = null;
      // case 2: xóa node có 1 con
      else if (node.left === null) node = node.right;
      else if (node.right === null) node = node.left;
      // case 3: xóa node có 2 con
      else {
        // tìm phần tử nhỏ nhất bên phải
        let smallestNode = this.getMinNode(node.right);
        node.data = smallestNode.data;
        node.right = this.delete(node.right, smallestNode.data);
      }
    }
    return node;
  };

  getMinNode = (node) => {
    let curNode = node;
    while (curNode.left) curNode = curNode.left;

    return curNode;
  };

  getMaxNode = (node) => {
    let curNode = node;
    while (curNode.right) curNode = curNode.right;

    return curNode;
  };

  // deepth first search

  // LNR
  dfsInOrder = () => {
    if (!this.root) return;

    const res = [];

    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      res.push(node.data);
      traverse(node.right);
    };

    traverse(this.root);
    return res;
  };

  // NLR
  dfsPreOrder = () => {
    if (!this.root) return;

    const res = [];

    const traverse = (node) => {
      if (!node) return;
      res.push(node.data);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return res;
  };

  // LRN
  dfsPostOrder = () => {
    if (!this.root) return;

    const res = [];

    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      res.push(node.data);
    };

    traverse(this.root);
    return res;
  };
}

module.exports = Tree;
