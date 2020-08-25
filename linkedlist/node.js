class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class NodeForDoubly extends Node{
    constructor(data){
        super(data);
        this.prev = null;
    }
}

module.exports = {
    Node,
    NodeForDoubly,
};