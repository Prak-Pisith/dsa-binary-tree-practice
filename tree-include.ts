/* 
  Tree Include - Search
    - BFS
    - DFS 
      - Iterator
      - Recursion
    - Queue
    - Stack 
*/

import { TreeNode, initializeTreeString } from "./tree";

// BFS - Iterator
export function bfsTreeIncludes<T> (root: TreeNode<T> | null, target: T): boolean { 

  if (!root) return false;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current?.value === target) return true;

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);
  }

  return false;
}

// DFS - Iterator
export function dfsTreeIncludesIterator<T> (root: TreeNode<T> | null, target: T): boolean {

  if (!root) return false;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current?.value === target) return true;

    if (current?.right) stack.push(current.right);
    if (current?.left) stack.push(current.left);
  }

  return false;
}

// DFS - Recursion
export function dfsTreeIncludesRecursion<T> (root: TreeNode<T> | null, target: T): boolean {
  
  // Base case
  if (!root) return false;
  if (root.value === target) return true;

  let leftValue: boolean = false;
  let rightValue: boolean = false;

  if (root.left) leftValue = dfsTreeIncludesIterator(root.left, target);
  if (root.right) rightValue = dfsTreeIncludesIterator(root.right, target);

  return leftValue || rightValue;
}

// Initialized Tree
const root = initializeTreeString();
const target: string = 'a';

// Time Log
let start;
let taken;

start = performance.now();
const bfsResult: boolean = bfsTreeIncludes(root, target);
taken = performance.now(); - start;
console.log('Tree Includes BFS: ', bfsResult);
console.log('Total Time taken: ' + taken + ' millisec');
console.log('--------------------------------');


start = performance.now();
const dfsIteratorResult: boolean = dfsTreeIncludesIterator(root, target);
taken = performance.now(); - start;
console.log('Tree Includes DFS Iterator: ', dfsIteratorResult);
console.log('Total Time taken: ' + taken + 'millisec');
console.log('--------------------------------');


start = performance.now();
const dfsRecursionResult = dfsTreeIncludesRecursion(root, target);
taken = performance.now(); - start;
console.log('Tree Includes DFS Recurstion: ', dfsRecursionResult);
console.log('Total Time taken: ' + taken + 'millisec');
console.log('--------------------------------');
