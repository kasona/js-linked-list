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

  var node = { //holder node
    value : null, // null makes value open to everything
    next : null
  };

  function newNode(value) {
    node = {
      value : value,
      next : null
    };
    return node;
  }// end of function newNode

  function add(value) {
    var node = newNode(value);
    if (length == 0) {
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

  // why is this wrong?
  // function get (num) { // search node, stop at num
  //   var current = head;
  //   if (length <= num) {

  //     return false;
  //   } else {
  //     // current = head;
  //     for (var i = 0; i < num; i++); {
  //       current = current.next;
  //     }
  //     return current;
  //    // console.log('sss', current);
  //   }
  // }

  function get(num) {
    var current = head;
    if (num < length) {
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
    if (num < 0 || n == length) { // If there is no node
      return false;
    } else if (num == 0) { //  1 Node, Just the head
      head = head.next;
    } else if (num < length ) { // 2 Nodes, Head and Tail
      head = head.next;
      tail = null;
    } else if (length > 2) { // More than 2 Nodes
      prev = get(num+1);

      // if (num == 0) { // handles 1st pos
      //   current.next = prev.next;
      // } else if (num == length - 1) { //handles prev
      //   head.next = current;
      //   tail = null; // null? , prev.next = null
      // } else { // middle
      //   head = null;
      //   tail = null ;
      }
    }

    // increment--
    //tail, needs to = null
  } // end of remove function


  function insert(value, x) {
    // search list
    // use get (num/x)
    var current = head;
    for (i = 0, i < x; i++;) //changed num to x (is stated in fun)
      current = current.next;
    return console.log(current.add(value));
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
var testList = linkedListGenerator();
console.log(testList.add('BANANANAANANANNANANANA'));
console.log(testList.add('BANANANAANANANNANANA'));
console.log(testList.add('BANAANANANNANANANA'));
// eyes.inspect(testList.add('BANANANAANANANNA'));
// eyes.inspect(testList.add('BAANANANNANANA'));
// eyes.inspect(testList.add('BAANANNANANA'));
// eyes.inspect(testList.add('BANANANAA'));
// eyes.inspect(testList.add('BANANAN'));
// eyes.inspect(testList.add('BANANA'));
// eyes.inspect(testList.add('BANA'));
// eyes.inspect(testList.add('BA'));
console.log(testList.get(0));
