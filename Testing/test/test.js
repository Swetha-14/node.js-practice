var chai = require('chai'); //import chai
var expect = chai.expect; //get reference to chai class

chai.should();           //BDD. initialize chai

function returnName(name){ //function to be tested 
    return name;
}

function AddNumToSelf(num){ //function to be tested 
    return (num + num);
}

function IsEven(num){ //function to be tested 
    return (num % 2 == 0);
}

describe('Return Name functionality', function(){ //BDD. style- functional test case
    it('Return the name passed to it', function(){ //BDD. style - unit test case
        returnName('Swetha').should.equal('Swetha'); //BDD. style assertion library
    });
});

describe('Math Operations', function(){ //BDD. style- functional test case
    it('Return the number added with the same number to it', function(){ //BDD. style - unit test case
        AddNumToSelf(5).should.equal(10); //BDD. style assertion library
    });
    it('Validates even numbers !', function(){ //BDD. style - unit test case
        IsEven(10).should.equal(true); //BDD. style assertion library
    });
});