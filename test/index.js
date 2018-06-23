const Component = require('../src/main');
const be = require('bejs');

describe('my-test', function () {

    before(function () {
        this.jsdom = require('jsdom-global')();
    });

    after(function () {
        setTimeout(()=>{
            this.jsdom()
        },100);
    });

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    //...
});