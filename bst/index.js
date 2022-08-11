const Tree = require("./tree");
const { randomArr } = require("../sorts/arrays/array");

const tree = new Tree(15);
// const nodes = [10, 20, 8, 12, 18, 30, 4, 16, 19];
const nodes = randomArr;
for (let node of nodes) tree.insert(node);

console.log(tree);
console.log(tree.contains(10));
console.log(tree.getMinNode(tree.root), tree.getMaxNode(tree.root));
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
tree.delete(tree.root, 13);
