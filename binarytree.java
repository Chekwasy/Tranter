// Node class that represents a node in the binary tree
class Nodeclass {
 int value;
 Node left;
 Node right;

 public Nodeclass(int value) {
  this.value = value;
  left = null;
  right = null;
 }
}

// The binary Tree class
class BinaryTree {
 Node root;

 public BinaryTree() {
  root = null;
 }

 // Public method to insert a new node with a given value and returns nothing
 public void insert(int value) {
  root = insertinNode(root, value);
 }

 // private method to insert a new node recursively(like an iteration)
 private Node insertinNode(Node current, int value) {
  if (current == null) {
   return new Nodeclass(value);
  }

  if (value < current.value) {
   current.left = insertinNode(current.left, value);
  } else if (value > current.value) {
   current.right = insertinNode(current.right, value);
  }

  return current;
 }

 // Method to print the binary tree values using inorder traversal technique
 public void printInorder() {
  printInorderFunc(root);
 }

 // Recursive method to print the binary tree using inorder traversal
 private void printInorderFunc(Node current) {
  if (current != null) {
   printInorderFunc(current.left);
   System.out.print(current.value + " ");
   printInorderFunc(current.right);
  }
 }
}

// A main class to test the binary tree for inorder traversal
public class Main {
 public static void main(String[] args) {
  BinaryTree tree = new BinaryTree();

  tree.insert(25);
  tree.insert(15);
  tree.insert(10);
  tree.insert(20);
  tree.insert(35);
  tree.insert(30);
  tree.insert(40);

  tree.printInorder(); // Expected output: 10 15 20 25 30 35 40
 }
}