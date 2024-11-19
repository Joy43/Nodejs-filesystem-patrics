const EventEmitter = require('events'); // Use 'events', not 'event'

const myEmitter = new EventEmitter();

// Define an event listener for the 'birthday' event
myEmitter.on('birthday', () => {
  console.log('Happy birthday to you!');
});
myEmitter.on('birthday',(gift)=>{
    console.log(`i will send a ${gift}`);
})
// Emit the 'birthday' event
// myEmitter.emit('birthday');
myEmitter.emit('birthday', 'watch');