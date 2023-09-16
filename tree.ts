// Tree Node Class

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



export function initializeTreeString(): TreeNode<string> {
  // Initialize Nodes
  const a = new TreeNode('a');
  const b = new TreeNode('b');
  const c = new TreeNode('c');
  const d = new TreeNode('d');
  const e = new TreeNode('e');
  const f = new TreeNode('f');

  // Connect Nodes
  a.left = b;
  a.right = c;

  b.left = d;
  b.right = e;

  c.right = f;

  return a;
}