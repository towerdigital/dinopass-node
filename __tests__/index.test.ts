/**
 * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as DinoPass from '../src';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let mockedAxios = new MockAdapter(axios);

beforeEach(() => {
    mockedAxios = new MockAdapter(axios);
});

describe('DinoPass', () => {
    it('Should fetch one simple password(s) from api.', async () => {
        mockedAxios.onGet('/simple').reply(200, 'crazypromise32');
        const pwd = await DinoPass.simple(1);

        expect(pwd).toEqual(['crazypromise32']);
        expect(mockedAxios.history.get.length).toBe(1);
        expect(pwd.length).toEqual(1);
    });

    it('Should return one password if number arg is not specified.', async () => {
        mockedAxios.onGet('/simple').reply(200, 'bigalert23');

        // @ts-ignore
        const pwd = await DinoPass.simple();

        expect(mockedAxios.history.get.length).toBe(1);
        expect(pwd).toEqual(['bigalert23']);
        expect(pwd.length).toEqual(1);
    });

    it('Should handle an error', async () => {
        mockedAxios.onGet('/simple').networkError();

        const pwd = await DinoPass.simple(1);
        expect(mockedAxios.history.get.length).toBe(1);
        expect(pwd).toEqual(Error('Network Error'));
    });

    it('Should fetch two strong password(s) from api.', async () => {
        mockedAxios.onGet('/strong').reply(200, 'f@stHeat78');

        const pwd = await DinoPass.strong(2);

        expect(mockedAxios.history.get.length).toBe(2);
        expect(pwd).toEqual(['f@stHeat78', 'f@stHeat78']);
        expect(pwd.length).toEqual(2);
    });

    it('Should fetch three simple passwords and Oraclify them.', async () => {
        mockedAxios.onGet('/simple').reply(200, 'greenmonkey44');

        const pwd = await DinoPass.oracleified(3);
        expect(mockedAxios.history.get.length).toBe(3);
        expect(pwd).toEqual(['Greenmonkey44#', 'Greenmonkey44#', 'Greenmonkey44#']);
    });

    it('Limits the number of passwords to 10.', async () => {
        mockedAxios.onGet('/simple').reply(200, 'blueocean34');

        const thePasswords = await DinoPass.simple(100);
        expect(mockedAxios.history.get.length).toBe(10);
        expect(thePasswords.length).toEqual(10);
    });
});
