'use strict'
/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
/**
 * @description
 * @param num The number of passwords
 * @param type  simple or strong
 * @param isOraclify Transform a simple password
 * @returns {Promise[]}
 */
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
/**
 * @description Returns one or more simple passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
const getSimplePassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'simple')
    } catch (err) {
      return err
    }
  })
exports.getSimplePassword = getSimplePassword
/**
 * @description Returns one or more strong passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
const getStrongPassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'strong')
    } catch (err) {
      return err
    }
  })
exports.getStrongPassword = getStrongPassword
/**
 * @description Returns one or more oraclified passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
const getOraclifiedPassword = n =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      return yield _requestPasswords(n, 'simple', true)
    } catch (err) {
      return err
    }
  })
exports.getOraclifiedPassword = getOraclifiedPassword
/**
 * @description Capitalize the first letter and amend a hash on the end.
 * The oraclefied password for Craig T.
 * @param p The password to Oracleify
 * @returns string The transformed password&
 */
const _oracleify = p => {
  return p.charAt(0).toUpperCase() + p.slice(1) + '#'
}
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlub3Bhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGlub3Bhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7OztBQUVILCtCQUFxQztBQUVyQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBQ3RCLEdBQVksRUFDWixJQUFhLEVBQ2IsVUFBb0IsRUFDdEIsRUFBRTtJQUNBLE1BQU0sUUFBUSxHQUFtQixFQUFFLENBQUE7SUFFbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ25CLEdBQUcsR0FBRyxDQUFDLENBQUE7S0FDVjtJQUVELElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWLEdBQUcsR0FBRyxFQUFFLENBQUE7S0FDWDtJQUVELE9BQU8sR0FBRyxFQUFFLEVBQUU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUNyQztJQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixJQUFJLFVBQVUsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNuQzthQUFNO1lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxDQUFVLEVBQWdCLEVBQUU7SUFDekQsSUFBSTtRQUNBLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDOUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFBO0tBQ2I7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQXNDUSw4Q0FBaUI7QUFwQzFCOzs7O0dBSUc7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBQU8sQ0FBVSxFQUFnQixFQUFFO0lBQ3pELElBQUk7UUFDQSxPQUFPLE1BQU0saUJBQWlCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0tBQzlDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQTtLQUNiO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUF5QjJCLDhDQUFpQjtBQXZCN0M7Ozs7R0FJRztBQUNILE1BQU0scUJBQXFCLEdBQUcsQ0FBTyxDQUFVLEVBQWdCLEVBQUU7SUFDN0QsSUFBSTtRQUNBLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQ3BEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQTtLQUNiO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFZOEMsc0RBQXFCO0FBVnBFOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFTLEVBQVUsRUFBRTtJQUNyQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDdkQsQ0FBQyxDQUFBIn0=
