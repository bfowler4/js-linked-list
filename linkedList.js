/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function add(data) {
    let newNode = node(data);

    if (head === null) {
      head = newNode;
    } else {
      tail.next = newNode;
      newNode.prev = tail;
    }
    tail = newNode;
    return newNode;
  }

  function get(number) {
    let temp = head;
    let index = 0;

    while (temp !== null) {
      if (index === number) {
        return temp;
      } else {
        temp = temp.next;
        index++;
      }
    }
    return false;
  }

  function remove(number) {
    let temp = head;
    let index = 0;

    while (temp !== null) {
      if (index === number) {
        if (index === 0) {
          head = head.next;

          if (head === null) {
            tail = null;
          } else {
            head.prev = null;
          }
        } else if (temp === tail) {
          tail = temp.prev;
          tail.next = null;
        } else {
          temp.prev.next = temp.next;
          temp.next.prev = temp.prev;
        }
        return true;
      }

      temp = temp.next;
      index++;
    }
    return false;
  }

  function insert(value, number) {
    let temp = head;
    let index = 0;
    let newNode = node(value);

    while (temp !== null) {
      if (index === number) {
        if (index === 0) {
          newNode.next = head;
          head.prev = newNode;
          head = newNode;
        } else {
          newNode.next = temp;
          newNode.prev = temp.prev;
          temp.prev.next = newNode;
          temp.prev = newNode;
        }
        return;
      }

      temp = temp.next;
      index++;
    }
    return false;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function node(data) {
    return {
      value: data,
      next: null,
      prev: null
    };
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}