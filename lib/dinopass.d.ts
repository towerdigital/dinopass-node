/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * @description Returns one or more simple passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
declare const getSimplePassword: (n?: number) => Promise<any>
/**
 * @description Returns one or more strong passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
declare const getStrongPassword: (n?: number) => Promise<any>
/**
 * @description Returns one or more oraclified passwords
 * @param n Number of passwords.
 * @returns Promise<any>
 */
declare const getOraclifiedPassword: (n?: number) => Promise<any>
export { getSimplePassword, getStrongPassword, getOraclifiedPassword }
