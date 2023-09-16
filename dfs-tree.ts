/* 
  Depth First Value 
    - Binary Tree
    - Stack
    - Iterator
    - Recursion
*/

import { TreeNode, initializeTreeString } from "./tree";

// Iteration
export function dfsTraversalIterator<T>(root: TreeNode<T> | null): T[] {
  
  if (!root) return [];

  const result: T[] = [];

  // Using Stack DS
  const stack: TreeNode<T>[] = [ root ];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current?.value!);

    if (current?.right) stack.push(current?.right!);
    if (current?.left) stack.push(current?.left!);
    
  }

  return result;
}

// Recursion
export function dfsTraversalRecursion<T> (root: TreeNode<T> | null): T[] {

  // Base Case
  if (!root) return [];

  let leftValues: T[] = [];
  let rightValues: T[] = [];
  if (root.left) leftValues = dfsTraversalRecursion(root.left);
  if (root.right) rightValues = dfsTraversalRecursion(root.right);

  return [root.value, ...leftValues, ...rightValues];

}

const root = initializeTreeString();

const resultDFSIterator = dfsTraversalIterator(root);
console.log('Result DFS Iterator: ' + resultDFSIterator);

const resultDFSRecursion = dfsTraversalRecursion(root);
console.log('Result DFS Recursion: ' + resultDFSRecursion);
