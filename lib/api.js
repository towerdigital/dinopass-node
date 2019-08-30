'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const axios_1 = __importDefault(require('axios'))
const fetchPassword = type => {
  return axios_1.default.get('http://www.dinopass.com/password/' + type)
}
exports.fetchPassword = fetchPassword
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLGtEQUF5QjtBQUV6QixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ25DLE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUNoRSxDQUFDLENBQUE7QUFDUSxzQ0FBYSJ9
