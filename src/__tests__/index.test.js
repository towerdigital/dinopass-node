/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as dinopass from '../index'
import mockAxios from 'axios'

jest.mock('axios')

describe('DinoPass Client Test Suite', () => {
  it('Should fetch one simple password(s) from api.', async () => {
    const resp = { data: 'crazypromise32' }
    mockAxios.get.mockResolvedValue(resp)

    const pwd = await dinopass.getSimplePassword(1)
    expect(pwd)
      .toBeArray()
      .toBeArrayOfSize(1)
      .toContain('crazypromise32')
  })

  it('Should return one password if no number is specified.', async () => {
    const resp = { data: 'bigalert23' }
    mockAxios.get.mockResolvedValue(resp)

    const pwd = await dinopass.getSimplePassword()
    expect(pwd)
      .toBeArray()
      .toBeArrayOfSize(1)
      .toContain('bigalert23')
  })

  it('Should handle an error', async () => {
    const resp = 'error'
    mockAxios.get.mockRejectedValue(resp)

    const pwd = await dinopass.getSimplePassword(1)
    expect(pwd).toEqual('error')
  })

  it('Should fetch two strong password(s) from api.', async () => {
    const resp = { data: 'f@stHeat78' }
    mockAxios.get.mockResolvedValue(resp)

    const pwd = await dinopass.getStrongPassword(2)
    expect(pwd)
      .toBeArray()
      .toBeArrayOfSize(2)
      .toContain('f@stHeat78')
  })

  it('Should handle an error', async () => {
    const resp = 'error'
    mockAxios.get.mockRejectedValue(resp)

    const pwd = await dinopass.getStrongPassword(1)
    expect(pwd).toEqual('error')
  })

  it('Should fetch three simple passwords and Oraclify them.', async () => {
    const resp = { data: 'greenkey44' }
    mockAxios.get.mockResolvedValue(resp)

    const pwd = await dinopass.getOraclifiedPassword(3)
    expect(pwd)
      .toBeArray()
      .toBeArrayOfSize(3)
      .toContain('Greenkey44#')
  })

  it('Limits the number of passwords to 10.', async () => {
    const thePasswords = await dinopass.getSimplePassword(100)
    expect(thePasswords.length).toBeLessThanOrEqual(10)
  })

  it('Should handle an error', async () => {
    const resp = 'error'
    mockAxios.get.mockRejectedValue(resp)

    const pwd = await dinopass.getOraclifiedPassword(1)
    expect(pwd).toEqual('error')
  })
})
