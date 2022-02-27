const hasEventName = (eventName) => {
  if (!eventName)
    throw new Error('eventName is required')
}

const isEventNameString = (eventName) => {
  if (typeof eventName !== 'string')
    throw new TypeError('eventName needs to be a typeof string')
}

const hasCallback = (callback) => {
  if (!callback)
    throw new Error('callback is required')
}

const isCallbackFunction = (callback) => {
  if (typeof callback !== 'function')
    throw new TypeError('callback needs to be a typeof function')
}

module.exports = {
  hasEventName,
  isEventNameString,
  hasCallback,
  isCallbackFunction
}
