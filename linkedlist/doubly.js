/* const { NodeForDoubly } = require('./node'); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NodeOrigin = /** @class */ (function () {
    function NodeOrigin(data) {
        this.data = data;
        this.next = null;
    }
    return NodeOrigin;
}());
var NodeForDoubly = /** @class */ (function (_super) {
    __extends(NodeForDoubly, _super);
    function NodeForDoubly(data) {
        var _this = _super.call(this, data) || this;
        _this.prev = null;
        return _this;
    }
    return NodeForDoubly;
}(NodeOrigin));
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        var _this = this;
        this.getHead = function () { return _this.head; };
        this.getTail = function () { return _this.tail; };
        this.isEmpty = function () { return _this.size === 0 ? true : false; };
        this.getSize = function () { return _this.size; };
        this.addHead = function (data) {
            var newNode = new NodeForDoubly(data);
            if (_this.head === null && _this.tail === null) {
                _this.head = _this.tail = newNode;
            }
            else {
                newNode.next = _this.head;
                _this.head.prev = newNode;
                _this.head = newNode;
            }
            _this.size += 1;
        };
        this.addTail = function (data) {
            var newNode = new NodeForDoubly(data);
            if (_this.head === null && _this.tail === null) {
                _this.head = _this.tail = newNode;
            }
            else {
                newNode.prev = _this.tail;
                _this.tail.next = newNode;
                _this.tail = newNode;
            }
            _this.size += 1;
        };
        this.removeHead = function () {
            if (_this.head === null && _this.tail === null) {
                console.log('List is already null');
                return null;
            }
            else if (_this.head === _this.tail) {
                _this.head = _this.tail = null;
                _this.size = 0;
            }
            else {
                var currentHead = _this.head;
                _this.head = currentHead.next;
                _this.head.prev = null;
                currentHead = null;
                _this.size -= 1;
            }
        };
        this.removeTail = function () {
            if (_this.head === null && _this.tail === null) {
                console.log('List is already null');
                return null;
            }
            else if (_this.head === _this.tail) {
                _this.head = _this.tail = null;
                _this.size = 0;
            }
            else {
                var currentTail = _this.tail;
                _this.tail = currentTail.prev;
                _this.tail.next = null;
                currentTail = null;
                _this.size -= 1;
            }
        };
        this.findNode = function (data) {
            if (_this.head === null && _this.tail === null)
                return null;
            else {
                var current = _this.head;
                while ((current !== null) && (current.data !== data)) {
                    current = current.next;
                }
                return current;
            }
        };
        this.sort = function () {
            var currentNode, nextNode;
            currentNode = _this.head;
            while (currentNode !== _this.tail) {
                nextNode = currentNode.next;
                while (nextNode !== null) {
                    if (nextNode.data < currentNode.data) {
                        var t = nextNode.data;
                        nextNode.data = currentNode.data;
                        currentNode.data = t;
                    }
                    nextNode = nextNode.next;
                }
                currentNode = currentNode.next;
            }
        };
        this.removeList = function () {
            if (_this.head === null && _this.tail === null) {
                return null;
            }
            else {
                var current = void 0;
                while (_this.head !== null) {
                    current = _this.head;
                    _this.head = current.next;
                    current = null;
                    _this.size -= 1;
                }
                _this.tail = null;
            }
        };
        this.head = this.tail = null;
        this.size = 0;
    }
    return DoublyLinkedList;
}());
var ll = new DoublyLinkedList();
for (var i = 0; i < 100; i++) {
    ll.addTail(Math.floor(Math.random() * 100));
}
ll.sort();
console.log(ll.getHead());
