'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
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
      }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
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
    // Keep track of previous
    let tempNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      tempNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    tempNode.next = currNode.next;
    console.log('remove');
  }

  insertBefore(newNodeValue, targetNodeValue) {
    // if list is empty return null(end)
    if(!this.head){
      this.insertFirst(newNodeValue);
    }
    if (this.head === null) {
      return null;
    }
    // loop through the list to find current and previous nodes
    // if node that has value equal to the target, that node is the current
    // Node and the one before it is the previous Node
    let currentNode = this.head;
    let tempNode = this.head;
    while (currentNode !== null && currentNode.value !== targetNodeValue) {
      tempNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('fuck the target');
    }

    tempNode.next = new _Node(newNodeValue, tempNode.next);
  }

  insertAfter(newNodeValue, targetNodeValue) {
    if (!this.head) {
      this.insertFirst(newNodeValue);
    }
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== targetNodeValue) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('fuck the target');
    }
    let newNode = new _Node(newNodeValue, currentNode.next);
    currentNode.next = newNode;
  }

  insertAt(newNode, position) {
    if (this.head === null) {
      return null;
    }
    let tempNode = this.head;
    let currentNode = this.head;
    for(let i=0; i<position-1; i++){
      tempNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('fuck the target');
    }
    tempNode.next = new _Node(newNode, currentNode);
  }
}

//3.
// function display(list){
//   if(!list.head){
//     return null;
//   }
//   let listArray = [];
//   let currentNode = list.head;
//   while(currentNode !== null){
//     listArray.push(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   return listArray;
// }


function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertAt('Kat', 3);
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertBefore('Athena', 'Boomer');
  // display(SLL);
  return SLL;
}
console.log(main());
//console.log(display());


module.exports = LinkedList;