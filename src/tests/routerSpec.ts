import supertest from 'supertest';

import app from '../server';

const request = supertest(app);

// here i will test the resize function
describe('check if endpoint is working ', function () {
  it('check if route is working', async () => {
    const response = await request.get('/?name=fjord&width=200&height=200');

    expect(response.status).toBe(200);
  });
});
