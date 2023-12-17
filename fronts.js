// # Front - Gregg Bowen

//To adddress the below assignment requirements, please see the below class methods called "frontValue", "removeFront", and "addFront".


// # Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// # Remove Front
// # Write a method to remove the head node and return the new list head node. If the list is empty, return null.


// # Add Front
// # Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.



class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor(head = null, tail = null) {
        this.head = head
        this.tail = tail
    }
    push(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return this.head;
        }
        else {
            let pointer = this.head
            while (pointer.next != null) {
                pointer = pointer.next
            }
            pointer.next = new Node(value);
            return this.head;
        }
    }
    pop(){
        if(this.head == null){
            this.head = new Node(value)
            return this.head;
        }
        else {
            let pointer = this.head
            while(pointer.next.next = null){
                pointer = pointer.next
            }
            pointer.next = null;
            return this.head;
        }
    } 
// The below classmethod will add a new node with assocatied value as the new head and reassign the old head as the next connected node in the SLL.
    addFront(value){ 
        if (this.head == null){
            this.head - new Node(value)
            return;
        }
        else {
            let pointer = this.head
            this.head = new Node(value)
            this.head.next = pointer
            return; 
        }
    }
//The below classmethod will return the value of the data in the head node.
    frontValue() {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.data
        }
    }
//The below classmethod will remove the head and make it so the following node becomes the new head.
    removeFront(){
        if(this.head == null){
            return;
        }
        else if (this.head.next == null){
            this.head = null
            return this.head;
        }
        else{
            this.head = this.head.next
            return this.head
        }
    }
}
var new_list = new SLL()
console.log(new_list)
new_list.push(7)
new_list.push(6)
new_list.push(4)
console.log('this head =', new_list)
console.log(new_list.removeFront())
console.log('this head =', new_list)
console.log('this head =', new_list.addFront(3))
console.log('final head =', new_list)
console.log(new_list.frontValue())






