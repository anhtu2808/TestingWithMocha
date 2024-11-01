import { request } from 'chai-http';
import chaiHttp from 'chai-http';
import * as chai from 'chai';

chai.use(chaiHttp);

// Sử dụng URL của server Express để test
const API_URL = 'http://localhost:3000';

const { expect } = chai;


describe('Test User API', function () {

    describe('POST /users', function () {
        // Test POST /users
        it('should POST a new user', async function () {
            const newUser = { name: 'John Doe', email: 'john@example.com', yob: 1985 };
            const res = await request.execute(API_URL).post('/users').send(newUser);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('name', newUser.name);
            expect(res.body).to.have.property('email', newUser.email);
            expect(res.body).to.have.property('yob', newUser.yob);
        });
    })

    describe('GET /users', function () {
        // Test GET /users
        let res;
        before(async function () {
            res = await request.execute(API_URL).get('/users');
        });
        it('Response should be an array', function () {
            expect(res.body).to.be.an('array');
        });
        it('Response should have the correct properties',function () {
            expect(res.body[0]).to.have.property('id');
            expect(res.body[0]).to.have.property('name');
            expect(res.body[0]).to.have.property('email');
            expect(res.body[0]).to.have.property('yob');
        });
        it('Response status should be 200', function () {
            expect(res).to.have.status(200);
        });
    })
});