/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { fetchPassword } from './api'

/**
 * Returns one or more simple passwords
 *  Simple passwords only have lower case letters and numbers.
 *
 * @param {number} n Number of passwords.
 * @returns Promise<any>
 */
const getSimplePassword = async (n?: number): Promise<any> => {
    try {
        return await _requestPasswords(n, 'simple')
    } catch (err) {
        return err
    }
}

/**
 * Returns one or more strong passwords
 * Strong passwords have mixed upper and lower case letters,
 * special character (like @, $, ! and so on) plus some numbers.
 *
 * @param {number} n Number of passwords.
 * @returns Promise<any>
 */
const getStrongPassword = async (n?: number): Promise<any> => {
    try {
        return await _requestPasswords(n, 'strong')
    } catch (err) {
        return err
    }
}

/**
 * The Oraclefied password for Craig T.
 * Capitalize the first letter and amend a hash on the end.
 * i.e. tinygrape76 => Tinygrape76#
 * Returns one or more oraclified passwords
 *
 * @param {number} n The number of passwords.
 * @returns Promise<any>
 */
const getOraclifiedPassword = async (n?: number): Promise<any> => {
    try {
        return await _requestPasswords(n, 'simple', true)
    } catch (err) {
        return err
    }
}

/**
 * Request the password(s) from the api
 *
 * @param {number} num  number of passwords
 * @param {string} type  simple or strong
 * @param {boolean} isOraclify Transform a simple password
 * @returns Promise[]
 */
const _requestPasswords = async (
    num?: number,
    type: string = 'simple',
    isOraclify?: boolean
) => {
    const requests: Promise<any>[] = []

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
                return _oracleify(password.data)
            } else {
                return password.data
            }
        })
    )
}

/**
 * Capitalize the first letter and amend a hash on the end.
 *
 * @param {string} p The password to Oracleify
 * @returns string
 */
const _oracleify = (p: string): string =>
    p.charAt(0).toUpperCase() + p.slice(1) + '#'

export { getSimplePassword, getStrongPassword, getOraclifiedPassword }
