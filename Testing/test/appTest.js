const assert = require('chai').assert;
const app = require('../app').sayHello;
const addNos = require('../app').addNos;

describe('App Test Cases', function(){
    it('app should return a string', function(){
        assert.typeOf(app(), 'string');
        //assert.equal(app(), 'hello');
    });

    it('addNos should return > 5', function(){
        let result = addNos(5, 5);
        assert.isAbove(result, 5);
    });
});