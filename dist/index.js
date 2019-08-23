/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var axios = _interopDefault(require('axios'))

async function fetchPassword(type) {
  return axios.get('http://www.dinopass.com/password/' + type)
}

const oracleify = p => {
  return p.charAt(0).toUpperCase() + p.slice(1) + '#'
}
async function requestPasswords(num, type, isOraclify) {
  const requests = []
  if (num === undefined) {
    num = 1
  }
  if (num > 10) {
    num = 10
  }
  while (num--) {
    requests.push(fetchPassword(type))
  }
  return Promise.all(requests).then(promises =>
    promises.map(password => {
      if (isOraclify) {
        return oracleify(password.data)
      } else {
        return password.data
      }
    })
  )
}
async function getSimplePassword(n) {
  try {
    return await requestPasswords(n, 'simple')
  } catch (err) {
    return err
  }
}
async function getStrongPassword(n) {
  try {
    return await requestPasswords(n, 'strong')
  } catch (err) {
    return err
  }
}
async function getOraclifiedPassword(n) {
  try {
    return await requestPasswords(n, 'simple', true)
  } catch (err) {
    return err
  }
}

exports.getOraclifiedPassword = getOraclifiedPassword
exports.getSimplePassword = getSimplePassword
exports.getStrongPassword = getStrongPassword
