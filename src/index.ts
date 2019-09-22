/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * /


 /**
 * From https://www.dinopass.com
 *
 * About Dino's Passwords
 * What does 'Simple password' mean?
 * Simple passwords only have lower case letters and numbers.
 * They are easier to remember but might also be easier for someone else to guess.
 *
 * What does 'Strong password' mean?
 * Strong passwords have mixed upper and lower case letters, a special character
 * (like @, $, ! and so on) plus some numbers. They are best to use for important things like
 * email accounts.
 */

/**
 * A very simple DinoPass API client
 *
 * @author Phillip Henslee <phil@towerdigital.us>
 * @version 0.5.6
 * @licence MIT
 */

import axios from 'axios';

/**
 * Capitalize the first letter and amend a hash on the end.
 *
 * @param p {string}
 */
function oracleify(p: string): string {
    return `${p.charAt(0).toUpperCase() + p.slice(1)}#`;
}

/**
 * Call the DinoPass API
 *
 * @param type {string}
 * @param isOracleify {boolean}
 */
async function api(type: string, isOracleify?: boolean) {
    const config = {
        baseURL: 'https://www.dinopass.com/password/',
        transformResponse: [(data: string) => (isOracleify ? oracleify(data) : data)]
    };
    return axios.get(type, config);
}

/**
 * Build the password request (promises).
 *
 * @param num {number}
 * @param type {string}
 * @param oraclify {boolean}
 */
async function request(num: number = 1, type: string, oraclify?: boolean): Promise<any> {
    const requests: Promise<any>[] = [];

    let n = num > 10 ? 10 : num;

    while (n > 0) {
        requests.push(api(type, oraclify));
        n -= 1;
    }
    return Promise.all(requests)
        .then(p => p.map(r => r.data))
        .catch(err => err);
}

/**
 * Return one or more simple passwords
 *
 * @param num {number}
 */
export function simple(num: number): Promise<any> {
    return request(num, 'simple');
}

/**
 * Returns one or more strong passwords
 *
 * @param num {number}
 */
export function strong(num: number): Promise<any> {
    return request(num, 'strong');
}

/**
 * The Oraclefied password for Craig T.
 * Capitalize the first letter and amend a hash on the end.
 * i.e. tinygrape76 => Tinygrape76#
 * Returns one or more oraclified passwords
 *
 * @param num {number}
 */
export function oracleified(num: number): Promise<any> {
    return request(num, 'simple', true);
}
