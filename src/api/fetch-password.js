/**
 * Copyright (c) Tower Digital LLC. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import axios from 'axios'

async function fetchPassword(type) {
  return axios.get('http://www.dinopass.com/password/' + type)
}
export { fetchPassword }
