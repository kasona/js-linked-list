/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
//Refer back to foreclosure.js and vault.js
// var eyes = require('eyes');

function linkedListGenerator() {
  var head = null;
  var tail = null;
  var length = 0;

  // var node = { //holder node
  //   value : null, // null makes value open to everything
  //   next : null
  // };

  function newNode(value) {
    var node = {
      value : value,
      next : null
    };
    return node;
  }// end of function newNode

  function add(value) {
    var node = newNode(value);
    if (length === 0) {
      head = node;
      tail = head;
      length++;
      return head;
    } else {
      tail.next = node;
      tail = node;
      length++;
      return tail;
    }
  } // end of add function

  function get(num) {
    var current = head;
    console.log(length, num);
    if (num < length && num >= 0) {
      for (var i = 0; i < num; i++) {
        current = current.next;
      }
      return current;
    } else {
      return false;
    }
  }

  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }

  function remove(num) {
    var prev = get(num - 1); //store num-1 b/c link goes down, not up
    var current = get(num);
    var next = get(num + 1);

    if (num < 0 || num === length) { // If there is no node, return null(false)
      return false;
    } else if (num === 0) { //  1 Node, Just the head ( 0 is the head)

      head = head.next;
      length--;
    } else if (num >= 2) { // More than 2 Nodes

      prev.next = get(num + 1); // previous nodes next becomes current+1 nodes next

      if (prev.next === false) { // if next doesnt exist

        prev.next = null;
        tail = prev;
      }
      length--;
    }
    return false;
  } // end of remove function

  function insert(value, x) {
    var prev = get(x - 1);
    var node = newNode(value);

    console.log('test123', node);
    node.next = get(x);

    if (prev === false) { // if previous doesnt exist
      prev = node;
    } else if (get(x) == tail) {
      return false;
    }
    length++;
    return node;
  }





  return { //calling stuff out of function
    getHead : getHead,
    getTail : getTail,
    add : add,
    remove : remove,
    get : get,
    insert : insert
  };
}

// var testList = linkedListGenerator();
// console.log(testList.add('BANANANAANANANNANANANA'));
// console.log(testList.add('BANANANAANANANNANANA'));
// console.log(testList.add('BANAANANANNANANANA'));
// eyes.inspect(testList.add('BANANANAANANANNA'));
// eyes.inspect(testList.add('BAANANANNANANA'));
// eyes.inspect(testList.add('BAANANNANANA'));
// eyes.inspect(testList.add('BANANANAA'));
// eyes.inspect(testList.add('BANANAN'));
// eyes.inspect(testList.add('BANANA'));
// eyes.inspect(testList.add('BANA'));
// eyes.inspect(testList.add('BA'));
// console.log(testList.get(0));
