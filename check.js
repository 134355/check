class Check {
  constructor () {
    const toString = Object.prototype.toString
    ;['String', 'Number', 'Boolean', 'Array',
      'Object', 'Function', 'Date', 'Symbol', 
      'Regexp', 'Undefined', 'Null', 'Error'
    ].forEach(name => {
      this[`is${name}`] = function (val) {
        return toString.call(val) === `[object ${name}]`
      }
    })
  }
}

let instance = null

class ProxyCheck {
  constructor () {
    return instance || (instance = new Check())
  }
}

export default ProxyCheck
