/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import axios from 'axios'

const fetchPassword = (type: string) => {
    return axios.get('http://www.dinopass.com/password/' + type)
}
export { fetchPassword }
