// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let node = this.head.next;
    let prev = this.head;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let node = this.getLast();
    if (node) {
      node.next = new Node(data);
    } else this.head = new Node(data);
  }

  getAt(int) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === int) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(int) {
    if(!this.head) return;
    if(int === 0) return this.head = this.head.next;
    const prev = this.getAt(int - 1);
    if (!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(data, int) {
    if (!this.head || int === 0) return this.insertFirst(data);
    const prev = this.getAt(int - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let node = this.head;

    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
