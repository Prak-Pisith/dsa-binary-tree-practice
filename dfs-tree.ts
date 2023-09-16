/* 
  Depth First Value 
*/

import { TreeNode, initializeTreeString } from "./tree";

// Iteration
export function depthFirstValueIterator<T>(root: TreeNode<T> | null): T[] {
  
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
export function depthFirstValueRecursion<T> (root: TreeNode<T> | null): T[] {

  // Base Case
  if (!root) return [];

  let leftValues: T[] = [];
  let rightValues: T[] = [];
  if (root.left) leftValues = depthFirstValueRecursion(root.left);
  if (root.right) rightValues = depthFirstValueRecursion(root.right);

  return [root.value, ...leftValues, ...rightValues];

}

const root = initializeTreeString();

const resultDFSIterator = depthFirstValueIterator(root);
console.log('Result DFS Iterator: ' + resultDFSIterator);

const resultDFSRecursion = depthFirstValueRecursion(root);
console.log('Result DFS Recursion: ' + resultDFSRecursion);
