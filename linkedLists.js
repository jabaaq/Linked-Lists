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
}

const list = new LinkedList()
list.append('a').append('b').append('c')

console.log(JSON.stringify(list));
//{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"tail":{"value":"c","next":null}}