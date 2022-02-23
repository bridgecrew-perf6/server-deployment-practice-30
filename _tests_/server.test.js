'use strict';

const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app);

describe("testing Api servr", ()=>{
    it('testing /',async()=>{
        const responce = await request.get('/');
        expect(responce.text).toEqual('Home');
    })
    it('test /data', async ()=>{
        const responce = await request.get('/data');
        expect(typeof responce.body).toEqual('object'); 
    })
})