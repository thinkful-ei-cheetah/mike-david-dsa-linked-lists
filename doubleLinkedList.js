'use strict';

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.tail === null ? this.tail = this.head : this.tail = this.tail.next;
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let previous = this.head;
      while (tempNode.next !== null) {
        previous = tempNode;
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, previous);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    let previous = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
      and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
        previous = currNode.next;
      }
    }
    // Found it
    return (currNode, previous);
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    let previous = this.head;
    // Keep track of previous


    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previous = currNode;

      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previous.next = currNode.next;
    console.log('remove');
  }

  insertBefore(newNodeValue, targetNodeValue) {
    // if list is empty return null(end)
    if (!this.head) {
      this.insertFirst(newNodeValue);
    }
    if (this.head === null) {
      return null;
    }
    // loop through the list to find current and previous nodes
    // if node that has value equal to the target, that node is the current
    // Node and the one before it is the previous Node
    let currentNode = this.head;
    let previous = this.head;
    while (currentNode !== null && currentNode.value !== targetNodeValue) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('fuck the target');
    }

    previous.next = new _Node(newNodeValue, previous.next);
  }

  insertAfter(newNodeValue, targetNodeValue) {
    if (!this.head) {
      this.insertFirst(newNodeValue);
    }
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    let previous = this.head;
    while (currentNode !== null && currentNode.value !== targetNodeValue) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('fuck the target');
    }
    currentNode.next = new _Node(newNodeValue, currentNode.next, previous);
  }

  insertAt(newNode, position) {
    if (this.head === null) {
      return null;
    }
    let previous = this.head;
    let currentNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('fuck the target');
    }
    currentNode.next = new _Node(newNode, currentNode.next, previous);
  }
}


function main() {
  let DLL = new DoubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron ');
  DLL.remove('Picon');
  // DLL.insertAfter('Hotdog', 'Helo');
  // DLL.insertBefore('Athena', 'Boomer');
  // display(DLL);
  return DLL;
}
console.log(main());



module.exports = DoubleLinkedList;