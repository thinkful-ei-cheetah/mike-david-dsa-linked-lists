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
// time complexity: Polynomial O(n^2)
// loops through a list and checks the value of current node and
// if they are the same, it will skips the second item and 
// continue through the list.

// 5. Reverse a list
function reverseList(linkedlist) {
  let currentNode = linkedlist.head;
  let previousNode = null;
  while (currentNode !== null) {
    let tempNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNode;
  }
  linkedlist.head = previousNode;
  return linkedlist;
}
// console.log(reverseList(SLL));

// 6. 3rd from the end
function thirdFromEnd(linkedlist) {
  let currentNode = linkedlist.head;
  while (currentNode.next.next.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
// console.log(thirdFromEnd(SLL));

// 7. Middle of a list
function middleOfList(linkedlist) {
  
}