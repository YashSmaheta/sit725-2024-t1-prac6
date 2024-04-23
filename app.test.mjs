import { expect } from 'chai';
import request from 'supertest';
const app = require('app');
const { connectdb } = require('data');

describe('Controller Tests', () => {
    before(async () => {
        await connectdb();
    });

    describe('POST /submit', () => {
        it('should insert form data and return success message', (done) => {
            const formData = { first_name: 'Yash', last_name: 'Maheta', mobile_no: '0123456789', email: 'yash123@deakin.com' };
            request(app)
                .post('/submit')
                .send(formData)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.message).to.equal('Form Data Saved Success!!!!!');
                    done();
                });
        });
    });
});
