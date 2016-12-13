var path = require('path');
var should = require('chai').should();
var cp = require('child_process');
// var Animal = require(path.join(process.cwd(), '/lib/Animal'));

describe('Mocha + Chai', function () {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('App', function () {
  it('stuff', function (done) {
    console.log('yes');
    cp.exec('node app.js --name=Scott', function (error, stdout, stderr) {
      // console.log('err', error);
      console.log(stdout);
      // console.log('err', stderr);
      done();
    });
  })
});
