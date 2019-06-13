'use strict';
const LinkedList = require('./linkedlist');

let SLL = new LinkedList();
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
display(SLL);

// 3. Supplemental functions for a linked list
function display(linklist) {
  let node = linklist.head;
  while (node !== null) {
    // console.log(node.value);
    node = node.next;
  }
}

function size(linklist) {
  let node = linklist.head;
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}
// console.log(size(SLL));

function isEmpty(linkedlist) {
  return linkedlist.head === null;
}
// console.log(isEmpty(SLL));

function findPrevious(linkedlist, value) {
  let currentNode = linkedlist.head;
  let previousNode = linkedlist.head;
  if (!linkedlist.head) {
    return null;
  }
  while (currentNode.value !== value) {
    if (currentNode.next === null) {
      return null;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return previousNode.value;
}
// console.log(findPrevious(SLL, 'Helo'));

function findLast(linkedlist) {
  let node = linkedlist.head;
  while (node.next !== null) {
    node = node.next;
  }
  return node.value;
}
// console.log(findLast(SLL));

// 4. Mystery program
