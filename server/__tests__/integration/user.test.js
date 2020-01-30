import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Leonel Ceolin Farias',
        email: 'leonell_ceolin@hotmail.com',
        password_hash: '12346',
      });

    expect(response.body).toHaveProperty('id');
  });
});
