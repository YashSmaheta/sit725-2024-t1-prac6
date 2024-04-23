const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { connectdb, insertData } = require('data');

const url = 'mongodb://localhost:27017';
const dbName = 'yashFormDb';

describe('Model Tests', () => {
    let db;

    before(async () => {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log("DB Connected!!");
    });

    after(async () => {
        await db.dropDatabase();
        await db.close();
    });

    describe('insertData()', () => {
        it('should insert form data into the database', async () => {
            const formData = { first_name: 'Yash', last_name: 'Maheta', mobile_no: '0123456789', email: 'yash123@deakin.com' };
            const result = await insertData(formData);
            expect(result.insertedCount).to.equal(1);
        });
    });
});
