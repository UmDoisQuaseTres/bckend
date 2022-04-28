const request = require('supertest');
const server = require('../app');

describe('Testar as rotas',  () => {
    it('Rota principal', async () => {
        const resposta = await request(server).get('/')
        expect(resposta.statusCode).toEqual(200)
        expect(resposta.body).toHaveProperty('message')
    });

    it('Rota new', async () => {
        const resposta = await request(server).post('/new').send({
            url: 'http://www.google.com'
        })
        expect(resposta.statusCode).toEqual(200)
        expect(resposta.body).toHaveProperty('url')
    })

})

