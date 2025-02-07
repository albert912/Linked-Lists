

import { LinkedList } from "./linked.js";


import { Node } from "./linked.js";

const list = new LinkedList();

// Append nodes
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("ostrich");

console.log(list.size());

console.log(list.Head());

console.log(list.Tail());

console.log(list.at(3));


console.log(list.contains("snake"));


console.log(list.find("hamster"));






list.toString();


list.pop();





list.toString();
