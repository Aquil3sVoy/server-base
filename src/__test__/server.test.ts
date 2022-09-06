import request from 'supertest'
import app from '../api'
import CustomError from '../errors/CustomError'


describe('server', () => {
    beforeEach((): void => {
        jest.setTimeout(30000)
    })
    it('app get / ', async () => {
        await request(app).get('/api/').set('Authorization', 'Bearer 123')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect({
                message: 'Hello World'
            })
    })

    it('app post /comment ', async () => {
        let body = {
            message: 'Hello World'
        }
        await request(app).post('/api/comment').set('Authorization', 'Bearer 123').send(body)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(body)
    })
})

it('expect 403 on / ', async () => {
    await request(app).get('/api/').expect(403).expect('Unauthorized')
})

it('expect 403 on /comment', async () => {
    await request(app).post('/api/comment').expect(403).expect('Unauthorized')
})
it('custome error', async () => {
    const error = new CustomError('Not found', 404)
    expect(error.message).toBe('Not found')
    expect(error.code).toBe(404)
}) 
