/**
 * Copyright (c) Tower Digital LLC. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { fetchPassword } from 'api/fetch-password'

/**
 * @description Capitalize the first letter and amend a hash on the end.
 * The oraclefied password for Craig T.
 * @param p The password to Oracleify
 */
const oracleify = p => {
  return p.charAt(0).toUpperCase() + p.slice(1) + '#'
}

/**
 * @description
 * @param num The number of passwords
 * @param type  simple or strong
 * @param isOraclify Transform a simple password
 * @returns {Promise[]}
 */
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

/**
 * @description Returns one or more simple passwords
 * @param n Number of passwords.
 * @returns Array
 */
async function getSimplePassword(n) {
  return requestPasswords(n, 'simple')
    .then(passwords => passwords)
    .catch(error => error)
}

/**
 * @description Returns one or more strong passwords
 * @returns Array
 */
async function getStrongPassword(n) {
  return requestPasswords(n, 'strong')
    .then(passwords => passwords)
    .catch(error => error)
}

/**
 * @description Returns one or more oraclified passwords
 * @returns Array
 */
async function getOraclifiedPassword(n) {
  return requestPasswords(n, 'simple', true)
    .then(passwords => passwords)
    .catch(error => error)
}

export { getSimplePassword, getStrongPassword, getOraclifiedPassword }
