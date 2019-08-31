/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
declare const fetchPassword: (
    type: string
) => Promise<import('axios').AxiosResponse<any>>
export { fetchPassword }
