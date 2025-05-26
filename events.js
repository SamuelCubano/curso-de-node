const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondeData) => {
    console.log('received')
    console.log(data)
    console.log(secondeData)
})

customEmitter.emit('response', 'Hello', [1,2,3])