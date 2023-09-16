/* 
  Breadth First Value
    - Binary Tree
    - Queue 
    - Iterator
*/

import { TreeNode, initializeTreeString } from "./tree";

export function bsfTraversalIterator<T> (root: TreeNode<T> | null): T[] {
  
  if (!root) return [];
  let result: T[] = [];

  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current?.value!);

    if (current?.left) queue.push(current?.left);
    if (current?.right) queue.push(current?.right);
  }

  return result;

}

// Initialize the Tree
const root: TreeNode<string> = initializeTreeString();

const result = bsfTraversalIterator(root);
console.log('BFS Iterator :', result);