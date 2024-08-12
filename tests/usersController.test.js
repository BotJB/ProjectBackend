const request = require('supertest');
const express = require('express');
const users = require('../models/usersSchema');
const moment = require('moment');
const usersController = require('../Controllers/usersControllers');

jest.mock('../models/usersSchema');
jest.mock('moment');

const app = express();
app.use(express.json());
app.post('/userpost', usersController.userpost);

describe('POST /userpost', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 400 if required fields are missing', async () => {
        const res = await request(app)
            .post('/userpost')
            .send({ fname: 'John', lname: 'Doe' });

        expect(res.status).toBe(400);
        expect(res.body).toBe("All inputs are required.");
    });

 
});