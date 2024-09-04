import request from 'supertest';
import app from 'app';

test('valid POST request to /apiRoutes/analyze', async () => {
  const resp = await request(app).post('/apiRoutes/analyze').send({
    analysisType: 'validType',
    repository: 'validRepo',
    sessionId: 'validSessionId',
  });

  expect(resp.statusCode).toEqual(200);
  expect(resp.body).toHaveProperty('data'); // Adjust this check based on actual response structure
});
