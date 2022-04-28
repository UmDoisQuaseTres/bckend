const request = require('supertest');
const server = require('../app');

describe('Testar o server',  () => {
    it('Pegar a rota principal', async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
})