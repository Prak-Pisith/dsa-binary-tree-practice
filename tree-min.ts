/* 
  Find Minimum Value in the Tree

*/

import { TreeNode, initializeTreeNumber } from "./tree";

// BFS
export function bfsMinValue (root: TreeNode<number>): number | null {
  
  // Queue -> Left -> Right

  if (!root) return null;

  let min: number = Number.MAX_VALUE;
  const queue: TreeNode<number>[] = [ root ];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current?.value! < min) min = current?.value!;

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);
  }
  return min;
}

// DFS
export function dfsMinValue (root: TreeNode<number>): number {

  // Base case
  if (!root) return Number.MAX_VALUE;

  let leftMin: number = Number.MAX_VALUE;
  let rightMin: number = Number.MAX_VALUE;

  if (root?.left) leftMin = dfsMinValue(root.left);
  if (root?.right) rightMin = dfsMinValue(root.right);

  return Math.min(root.value, leftMin, rightMin);
}

// Initialized Tree 
const root = initializeTreeNumber();

// Time Log
let start;
let taken;

start = performance.now();
const bfsMinResult: number | null = bfsMinValue(root);
taken = performance.now(); - start;
console.log('Min Value BFS: ', bfsMinResult);
console.log('Total Time taken: ' + taken + ' millisec');
console.log('--------------------------------');

start = performance.now();
const dfsMinResult: number | null = dfsMinValue(root);
taken = performance.now(); - start;
console.log('Min Value DFS: ', dfsMinResult);
console.log('Total Time taken: ' + taken + ' millisec');
console.log('--------------------------------');