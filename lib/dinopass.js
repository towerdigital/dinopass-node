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
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlub3Bhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGlub3Bhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBLCtCQUFxQztBQVNyQyxNQUFNLGlCQUFpQixHQUFHLENBQ3RCLEdBQVksRUFDWixJQUFhLEVBQ2IsVUFBb0IsRUFDdEIsRUFBRTtJQUNBLE1BQU0sUUFBUSxHQUFtQixFQUFFLENBQUE7SUFFbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ25CLEdBQUcsR0FBRyxDQUFDLENBQUE7S0FDVjtJQUVELElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWLEdBQUcsR0FBRyxFQUFFLENBQUE7S0FDWDtJQUVELE9BQU8sR0FBRyxFQUFFLEVBQUU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUNyQztJQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixJQUFJLFVBQVUsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNuQzthQUFNO1lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBT0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLENBQVUsRUFBZ0IsRUFBRTtJQUN6RCxJQUFJO1FBQ0EsT0FBTyxNQUFNLGlCQUFpQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUM5QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUE7S0FDYjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBcUNRLDhDQUFpQjtBQTlCMUIsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLENBQVUsRUFBZ0IsRUFBRTtJQUN6RCxJQUFJO1FBQ0EsT0FBTyxNQUFNLGlCQUFpQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUM5QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUE7S0FDYjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBd0IyQiw4Q0FBaUI7QUFqQjdDLE1BQU0scUJBQXFCLEdBQUcsQ0FBTyxDQUFVLEVBQWdCLEVBQUU7SUFDN0QsSUFBSTtRQUNBLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQ3BEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQTtLQUNiO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFXOEMsc0RBQXFCO0FBSnBFLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBUyxFQUFVLEVBQUU7SUFDckMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ3ZELENBQUMsQ0FBQSJ9
