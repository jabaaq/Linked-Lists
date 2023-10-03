class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    toString() {
        return `${this.value}`
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        this.tail.next = newNode            //Next is always looking for null, but i added newNode now
        this.tail = newNode

        return this         // The current list will be returned
    }

    prepend(value) {
        const newNode = new Node(value, this.head)

        this.head = newNode  //newNode is gonna be the new head of the linked list

        if (!this.tail) {
            this.tail = newNode
        }

        return this

    }

    find(value) {       //returns the index of the node containing value, or null if not found.

        if (!this.head) {
            return null
        }

        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }

            currentNode = currentNode.next
        }

        return null

    }

    size() {
        let count = 0;
        let node = this.head

        while (node) {
            count++
            node = node.next
        }

        return count
    }

    toArray() {
        const nodes = []

        let currentNode = this.head

        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString()
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let lastNode = this.head

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null     // Index out of bounds
        }

        let current = this.head
        let currentIndex = 0

        while (currentIndex < index) {
            current = current.next   //moves on to the next node
            currentIndex++
        }

        return current
    }

    pop() {
        if (this.length === 0) {    // no node in the list, therefore return null
            return null
        }

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length = this.length - 1
        if (this.length === 1) {

            this.head = null
            this.tail = null
        }
        return current
    }

    contains(value) {
        let node = this.head
        while (node) {
            if (node.value === value) {
                return true
            }
            node = node.next
        }
        return false
    }
}

const list = new LinkedList()
list.append('a').append('b').append('New')

console.log(list.contains('New'));  
