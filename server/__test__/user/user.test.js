const request = require('supertest');
const app = require('../../src/app')

describe('POST User', () => {
    test('must return an error if the password is empty', async () => {        
            const data = {
                email: 'oularefode@gmail.com',
                password : ''
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })

    test('must return an error if the password do not contain special character', async () => {        
            const data = {
                email: 'oularefode@gmail.com',
                password : 'nnmmm5555555PPPPP'
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })

    test('must return an error if the password is empty do not conatain a number', async () => {        
            const data = {
                email: 'oularefode@gmail.com',
                password : 'MMKKKKK*************nnnnnnn'
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })

    test('must return an error if the password is empty do not conatain a uppercase', async () => {        
            const data = {
                email: 'oularefode@gmail.com',
                password : 'nnnnnn*************nnnnnnn'
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })

    test('must return an error if the password is empty do not conatain a lowercase', async () => {        
            const data = {
                email: 'oularefode@gmail.com',
                password : 'nnnnnn*************nnnnnnn'
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })

    test('must return an error if the email is not correct', async () => {        
            const data = {
                email: 'oularefodgmailcom',
                password : 'nnmmmm****5555PPPPPP'
            };
            const response = await request(app)
                .post('/api/users')
                .send(data);
        
            expect(response.statusCode).toBe(401);
    })
      
  });