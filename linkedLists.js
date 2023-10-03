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

}

const list = new LinkedList()
list.append('a').append('b').append('New')

console.log(list.getLast().toString());   //a
