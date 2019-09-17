/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import DinoPass from '../src'
// @ts-ignore
import axios, { AxiosStatic } from 'axios'

jest.mock('axios')
// @ts-ignore
const mockedAxios = axios as jest.Mocked<typeof AxiosStatic>

describe('DinoPass Client Test Suite', () => {
    it('Should fetch one simple password(s) from api.', async () => {
        const resp = { data: 'crazypromise32' }
        mockedAxios.mockResolvedValue(resp)

        const pwd = await DinoPass.simple(1)

        expect(pwd).toEqual(['crazypromise32'])
        expect(pwd.length).toEqual(1)
    })

    it('Should return one password if no number is specified.', async () => {
        const resp = { data: 'bigalert23' }
        mockedAxios.mockResolvedValue(resp)

        // @ts-ignore
        const pwd = await DinoPass.simple()
        expect(pwd).toEqual(['bigalert23'])
        expect(pwd.length).toEqual(1)
    })

    /*it('Should handle an error', async () => {
        const resp = 'error'
        mockedAxios.mockRejectedValue(resp)

        const pwd = await DinoPass.simple(1)
        expect(pwd).toEqual('error')
    })*/

    it('Should fetch two strong password(s) from api.', async () => {
        const resp = { data: 'f@stHeat78' }
        mockedAxios.mockResolvedValue(resp)

        const pwd = await DinoPass.strong(2)
        expect(pwd).toEqual(['f@stHeat78', 'f@stHeat78'])
        expect(pwd.length).toEqual(2)
    })

    it('Should fetch three simple passwords and Oraclify them.', async () => {
        const resp = { data: 'Greenkey44#' }
        mockedAxios.mockResolvedValue(resp)

        const pwd = await DinoPass.oracleified(3)
        expect(pwd).toEqual(['Greenkey44#', 'Greenkey44#', 'Greenkey44#'])
    })

    it('Limits the number of passwords to 10.', async () => {
        const resp = { data: 'blueshark67' }
        mockedAxios.mockResolvedValue(resp)

        const thePasswords = await DinoPass.simple(100)
        expect(thePasswords.length).toEqual(10)
    })
})
