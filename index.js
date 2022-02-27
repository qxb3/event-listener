const EventListener = require('./EventListener')
const events = new EventListener()

events.on('ready', () => {
  console.log('ready')
})

events.addListener('add', (num1, num2) => {
  console.log(num1 + num2)
})

/*events.off('ready')
events.removeListener('add')*/

events.emit('ready')
events.emit('add', 5, 5)
