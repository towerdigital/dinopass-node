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
 * @version 0.4.0
 * @licence MIT
 */

import axios from 'axios';

/**
 *  @class DinoPass
 */
export default class DinoPass {
    /**
     * Private static method to call the API.
     *
     * @param type {string}
     * @param isOracleify {boolean}
     */
    private static async api(type: string, isOracleify?: boolean) {
        const config = {
            baseURL: 'https://www.dinopass.com/password/',
            transformResponse: [
                (data: string) =>
                    isOracleify ? DinoPass.oracleify(data) : data
            ],
            timeout: 1000
        };
        return axios.get(type, config);
    }

    /**
     * Private static method to build the password request (promises).
     *
     * @param num {number}
     * @param type {string}
     * @param oraclify {boolean}
     */
    private static async request(
        num: number = 1,
        type: string,
        oraclify?: boolean
    ): Promise<any> {
        const requests: Promise<any>[] = [];

        let n = num > 10 ? 10 : num;

        while (n > 0) {
            requests.push(DinoPass.api(type, oraclify));
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
    static simple(num: number): Promise<any> {
        return DinoPass.request(num, 'simple');
    }

    /**
     * Returns one or more strong passwords
     *
     * @param num {number}
     */
    static strong(num: number): Promise<any> {
        return DinoPass.request(num, 'strong');
    }

    /**
     * The Oraclefied password for Craig T.
     * Capitalize the first letter and amend a hash on the end.
     * i.e. tinygrape76 => Tinygrape76#
     * Returns one or more oraclified passwords
     *
     * @param num {number}
     */
    static oracleified(num: number): Promise<any> {
        return DinoPass.request(num, 'simple', true);
    }

    /**
     * Capitalize the first letter and amend a hash on the end.
     *
     * @param p {string}
     */
    private static oracleify(p: string): string {
        return `${p.charAt(0).toUpperCase() + p.slice(1)}#`;
    }
}
