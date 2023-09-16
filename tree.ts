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

export function initializeTreeStringCustom(startChar: string, endChar: string): TreeNode<string> {
  function generateTree(start: string, end: string): TreeNode<string> | null {
    if (start > end) {
      return null;
    }
    
    const mid = Math.floor((start.charCodeAt(0) + end.charCodeAt(0)) / 2);
    const midChar = String.fromCharCode(mid);
    const node = new TreeNode(midChar);
    
    node.left = generateTree(start, String.fromCharCode(mid - 1));
    node.right = generateTree(String.fromCharCode(mid + 1), end);
    
    return node;
  }

  return generateTree(startChar, endChar) as TreeNode<string>;
}

// Usage
// const tree = initializeTreeStringCustom('a', 'z');
// console.log(tree);

export function initializeTreeNumber (): TreeNode<number> {

    // Initialize Nodes
    const a = new TreeNode(5);
    const b = new TreeNode(13);
    const c = new TreeNode(7);
    const d = new TreeNode(3);
    const e = new TreeNode(12);
    const f = new TreeNode(8);
  
    // Connect Nodes
    a.left = b;
    a.right = c;
  
    b.left = d;
    b.right = e;
  
    c.right = f;
  
    return a;
}