export class Node {
  constructor() {
    this.data = null;
    this.nextNode = null;
  }
}

export class LinkedList {

  constructor() {
    this.head = null;  
  }

  append(value) {
    const newNode = new Node(); 
    newNode.data = value;       

    if (!this.head) {
      this.head = newNode; 
      return;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode; 
    }
    current.nextNode = newNode; 
  }


  prepend(value) {
    const newNode = new Node(); 
    newNode.data = value;  

    newNode.nextNode = this.head; 
    this.head = newNode; 
  }



  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.nextNode;
    }
    return count;
}

Head() {


  return this.head;

}

Tail() {
  let lastNode = this.head;
  if (lastNode) {
      while (lastNode.nextNode) {
          lastNode = lastNode.nextNode
      }
  }
  return lastNode
}


at(index) {
  let current = this.head;  
  let currentIndex = 0; 
  while (current !== null) {  
      if (currentIndex === index) {
          return current; 
      }
      current = current.nextNode; 
      currentIndex++; 
  }
  return null;  
}

pop() {
  if (!this.head) return;  

  let current = this.head;
  if (!current.nextNode) {
      this.head = null;  
      return;
  }

  while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;  
  }
  current.nextNode = null;  
}


contains(value) {
  let current = this.head;  
  while (current !== null) {  
      if (current.data === value) {
          return true;  
      }
      current = current.nextNode;  
  }
  return false;  
}


find(value) {
    let current = this.head;  
    let index = 0;  
    while (current !== null) {  
        if (current.data === value) {
            return index;  
        }
        current = current.nextNode;  
        index++;  
    }
    return null;  
}




  toString() {
    let current = this.head;
    let list = '';
    while (current !== null) {
      list += current.data + ' -> ';
      current = current.nextNode;
    }
    list += 'null';
    console.log(list);
  }



}




      
   








