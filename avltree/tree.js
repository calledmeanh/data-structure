const Node = require("./node");

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight = (node) => (!node ? 0 : node.height);

  getMaximun = (node) =>
    Math.max(this.getHeight(node.left), this.getHeight(node.right));

  getBalance = (node) => {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
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

  leftRotate = (node) => {
    if (!node) return null;

    const returnNode = node.right;
    node.right = returnNode.left;
    returnNode.left = node;

    node.height = this.getMaximun(node) + 1;
    returnNode.height = this.getMaximun(returnNode) + 1;

    return returnNode;
  };

  rightRotate = (node) => {
    if (!node) return null;

    const returnNode = node.left;
    node.left = returnNode.right;
    returnNode.right = node;

    node.height = this.getMaximun(node) + 1;
    returnNode.height = this.getMaximun(returnNode) + 1;

    return returnNode;
  };

  contains = (x) => {
    if (!this.root) return false;

    let found = false;
    const traverse = (node) => {
      if (x === node.data) found = true;

      if (x < node.data) {
        if (node.left) traverse(node.left);
      } else {
        if (node.right) traverse(node.right);
      }
    };

    traverse(this.root);
    return found;
  };

  insert = (data) => {
    const traverse = (node) => {
      if (node === null) node = newNode;
      else if (data < node.data) {
        if (node.left) node.left = traverse(node.left);
        else node.left = newNode;
      } else if (data > node.data) {
        if (node.right) node.right = traverse(node.right);
        else node.right = newNode;
      }

      node.height = this.getMaximun(node) + 1;

      const balance = this.getBalance(node);
      // right rotate
      if (balance > 1) {
        // left-right
        if (data > node.left.data) node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
      // left rotate
      else if (balance < -1) {
        // right-left
        if (data < node.right.data) node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
      return node;
    };

    let newNode = new Node(data);
    this.root = traverse(this.root);
  };

  delete = (node, data) => {
    if (!node) return null;
    else if (data < node.data) node.left = this.delete(node.left, data);
    else if (data > node.data) node.right = this.delete(node.right, data);
    else {
      // case 1: xóa node lá
      if (node.left === null && node.right === null) return null;
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

    if (!node) return null;

    node.height = this.getMaximun(node) + 1;
    const balance = this.getBalance(node);

    // left left
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    // right left
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // right right case
    if (balance < -1 && this.getBalance(node.right) <= 0)
      return this.leftRotate(node);

    // right left case
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  };

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
}

module.exports = AVLTree;
