import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App';
let sinon = require('sinon');

describe("Test suit for App", () => {
    
    let server: any;

    beforeAll(() => {
        server = sinon.createFakeServer();
    });
    afterAll(()=>{
        server.restore();
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // FIXME: It is a dummy test copy/pasted from some webpage.
    it('Should to sent a RESTapi get to server', () => {
        server.respondWith("GET", "/some/article/comments.json",
            [200, { "Content-Type": "application/json" },
            '[{ "id": 12, "comment": "Hey there" }]']);

        var callback = sinon.spy();
        // myLib.getCommentsFor("/some/article", callback);
        server.respond();

        sinon.assert.calledWith(callback, [{ id: 12, comment: "Hey there" }]);
        sinon.assert(server.requests.length > 0)
    })
})

