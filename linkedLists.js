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

}

const list = new LinkedList()
list.append('a').append('b').prepend('New')

console.log(list.toString());
