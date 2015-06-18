/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/blog_clone.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}
/*******************************/
var expect = chai.expect;
var should = chai.should();

var blogFactory = GLOBAL.blogFactory;

describe("#blogFactory", function() {

  var blogClone1, blogClone2;

  beforeEach (function() {
    blogClone1 = blogFactory({
      author: "Foo",
      name: "My Foo Blog"
    });

    blogClone2 = blogFactory({
      author: "Bar",
      name: "My Bar Blog"
    });
  });

  it('should be a function', function() {
    expect(blogFactory).to.exist;
    expect(blogFactory).to.be.an('function');
  });
})