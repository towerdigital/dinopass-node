'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value)
            }).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('./api')
const _requestPasswords = (num, type, isOraclify) =>
  __awaiter(this, void 0, void 0, function*() {
    const requests = []
    if (num === undefined) {
      num = 1
    }
    if (num > 10) {
      num = 10
    }
    while (num--) {
      requests.push(api_1.fetchPassword(type))
    }
    return Promise.all(requests).then(promises =>
      promises.map(password => {
        if (isOraclify) {
          return _oracleify(password.data)
        } else {
          return password.data
        }
      })
    )
  })
const getSimplePassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'simple')
    } catch (err) {
      return err
    }
  })
exports.getSimplePassword = getSimplePassword
const getStrongPassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'strong')
    } catch (err) {
      return err
    }
  })
exports.getStrongPassword = getStrongPassword
const getOraclifiedPassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'simple', true)
    } catch (err) {
      return err
    }
  })
exports.getOraclifiedPassword = getOraclifiedPassword
const _oracleify = p => {
  return p.charAt(0).toUpperCase() + p.slice(1) + '#'
}
