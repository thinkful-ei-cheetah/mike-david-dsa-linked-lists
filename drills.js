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