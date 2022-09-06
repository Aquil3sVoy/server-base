import request from 'supertest';
import app from '../api';

describe('apiRateLimiter', () => {
    it('should create a rate limiter', async () => {
        let times = 7;
        let statusCode = ''
        for (let i = 0; i < times; i++) {
            const responde = await request(app).get('/api/').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
            const { status } = responde;
            statusCode = status;
        }
        expect(statusCode).toBe(429);
    })
})
