const { LinkedList } = require('./linkedLists')

function init() {
    const list = new LinkedList()

    list
        .append('A')
        .append('B')
        .append('C')
        .append('D')

    return list
}

describe('Linked list', () => {
    test('Append', () => {
        let list = init()

        expect(list.append('X').toString()).toBe('A,B,C,D,X')
    })
})