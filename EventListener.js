const {
  hasEventName,
  isEventNameString,
  hasCallback,
  isCallbackFunction
} = require('./errors')

class EventListener {
  constructor() {
    this.events = new Map()
  }

  /*
   * Listen to an event
   * @param {String} the event name to listen
   * @param {Function} the callback that is gonna trigger when emitted
   */
  on(eventName, callback) {
    hasEventName(eventName)
    isEventNameString(eventName)
    hasCallback(callback)
    isCallbackFunction(callback)

    this.events.set(eventName, callback)
  }

  /*
   * Removes an event
   * @param {String} the event name to remove
   */
  off(eventName) {
    hasEventName(eventName)
    isEventNameString(eventName)

    this.events.delete(eventName)
  }

  /*
   * Adds an event
   * @param {String} the event name to add
   * @param {String} the callback that is gonna trigger when emitted
   */
  addListener(eventName, callback) {
    this.on(eventName, callback)
  }

  /*
   * Removes an event
   * @param {String} the event name to remove
   */
  removeListener(eventName) {
    this.off(eventName)
  }

  /*
   * Emit an event
   * @param {String} the event name to emit
   * @param {any} The arguments to pass in
   */
  emit(eventName, ...args) {
    hasEventName(eventName)
    isEventNameString(eventName)

    const event = this.events.get(eventName)
    if (event) {
      event(...args)
    }
  }
}

module.exports = EventListener
