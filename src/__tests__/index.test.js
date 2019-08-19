/**
 * Copyright (c) Tower Digital LLC. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as dinopass from '../index'

describe('DinoPass Client Test Suite', () => {
  it('Should fetch a simple password(s) from api.', async () => {
    const thePasswords = await dinopass.getSimplePassword(1) /* ? */
    expect(thePasswords).toBeArrayOfSize(1)
  })

  it('Should fetch a strong password(s) from api.', async () => {
    const thePasswords = await dinopass.getStrongPassword(2) /* ? */
    expect(thePasswords).toBeArrayOfSize(2)
  })

  it('Should fetch an oraclified password(s) from api.', async () => {
    const thePasswords = await dinopass.getOraclifiedPassword(3) /* ? */
    const passwordSample = thePasswords[0]
    expect(thePasswords).toBeArrayOfSize(3)
    expect(passwordSample)
      .toBeString()
      .toInclude('#')
  })

  it('Limits the number of passwords to 10.', async () => {
    const thePasswords = await dinopass.getSimplePassword(50) /* ? */
    expect(thePasswords.length).toBeLessThanOrEqual(10)
  })
})
