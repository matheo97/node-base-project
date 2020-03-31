'use strict';

import 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSubset from 'chai-subset';
import { default as Endpoint } from '../../../src/api/paths/users';
import { TestHarness } from '../testUtils';
// Configure Chai
chai.use(chaiSubset);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Test src/api/paths/index.ts endpoint', () => {
  const baseOptions = {
    instanced: false,
    endpoint: Endpoint,
    uri: '/',
  };

  describe('GET', () => {
    const getOptions = {
      ...baseOptions,
      req: {},
      method: 'GET',
    };

    it('Returns success heartbeat', async () => {
      const options = {
        ...getOptions,
      };

      // test
      const res = await TestHarness.makeRequest(options);


      // validate
      const expectedStatusCode = 200;
      const expectedBody = { success: true };

      expect(res.statusCode).to.deep.equal(expectedStatusCode);
      expect(res.body).to.deep.equal(expectedBody);
    });
  });
});

