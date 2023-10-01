const EventEmitter = require('events');

class Emitter extends EventEmitter { }

const myE = new Emitter();

// first define a listener for an event
myE.once('foo', () => {
  console.log("Event once occured")
})

// first define a listener for an event
myE.on('foo', () => {
  console.log("Event occured 1")
})

// first define a listener for an event
myE.on('foo', () => {
  console.log("Event occured 2")
})

// first define a listener for an event
myE.on('foo', (x) => {
  console.log("Event occured 3 with parameter: ", x)
})

// first define a listener for an event
myE.on('bar', () => {
  console.log("Event bar occured")
})

// then we fire the event that we defined
myE.emit('foo');

// then we fire the event that we defined
myE.emit('foo', "some text");


myE.emit("bar");