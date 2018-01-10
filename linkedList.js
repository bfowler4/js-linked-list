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
    let nodeToRemove = this.get(number);

    if (nodeToRemove) {
      if (nodeToRemove === head) {
        head = head.next;

        if (head === null) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (nodeToRemove === tail) {
        tail = tail.prev;
        tail.next = null;
      } else {
        nodeToRemove.prev.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeToRemove.prev;
      }
    } else {
      return false;
    }
  }

  function insert(value, number) {
    let nodeToInsertAt = this.get(number);

    if (nodeToInsertAt) {
      let newNode = node(value);
      if (nodeToInsertAt === head) {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
      } else {
        newNode.next = nodeToInsertAt;
        newNode.prev = nodeToInsertAt.prev;
        nodeToInsertAt.prev.next = newNode;
        nodeToInsertAt.prev = newNode;
      }
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