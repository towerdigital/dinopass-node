/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as dinopass from '../src/index'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('DinoPass Client Test Suite', () => {
    it('Should fetch one simple password(s) from api.', async () => {
        const resp = { data: 'crazypromise32' }
        mockedAxios.get.mockResolvedValue(resp)

        const pwd = await dinopass.getSimplePassword(1) /* ? */
        expect(pwd).toEqual(['crazypromise32'])
        expect(pwd.length).toEqual(1)
    })

    it('Should return one password if no number is specified.', async () => {
        const resp = { data: 'bigalert23' }
        mockedAxios.get.mockResolvedValue(resp)

        const pwd = await dinopass.getSimplePassword() /* ? */
        expect(pwd).toEqual(['bigalert23'])
        expect(pwd.length).toEqual(1)
    })

    it('Should handle an error', async () => {
        const resp = 'error'
        mockedAxios.get.mockRejectedValue(resp)

        const pwd = await dinopass.getSimplePassword(1)
        expect(pwd).toEqual('error')
    })

    it('Should fetch two strong password(s) from api.', async () => {
        const resp = { data: 'f@stHeat78' }
        mockedAxios.get.mockResolvedValue(resp)

        const pwd = await dinopass.getStrongPassword(2)
        expect(pwd).toEqual(['f@stHeat78', 'f@stHeat78'])
        expect(pwd.length).toEqual(2)
    })

    it('Should handle an error', async () => {
        const resp = 'error'
        mockedAxios.get.mockRejectedValue(resp)

        const pwd = await dinopass.getStrongPassword(1)
        expect(pwd).toEqual('error')
    })

    it('Should fetch three simple passwords and Oraclify them.', async () => {
        const resp = { data: 'greenkey44' }
        mockedAxios.get.mockResolvedValue(resp)

        const pwd = await dinopass.getOraclifiedPassword(3)
        expect(pwd).toEqual(['Greenkey44#', 'Greenkey44#', 'Greenkey44#'])
    })

    it('Limits the number of passwords to 10.', async () => {
        const resp = { data: 'blueshark67' }
        mockedAxios.get.mockResolvedValue(resp)

        const thePasswords = await dinopass.getSimplePassword(100)
        expect(thePasswords.length).toEqual(10)
    })

    it('Should handle an error', async () => {
        const resp = 'error'
        mockedAxios.get.mockRejectedValue(resp)

        const pwd = await dinopass.getOraclifiedPassword(1)
        expect(pwd).toEqual('error')
    })
})
