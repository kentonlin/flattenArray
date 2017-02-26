var expect = chai.expect;
describe('flatten', function() {
  it('can flatten nested arrays', function() {
    var nestedArray = [1, [2], [3, [[[4]]]]];
    expect(flatten(nestedArray)).to.eql([1,2,3,4]);
  });
  it('should disregard null values', function() {
    var nestedArray = [0, 2, [[2, 3], 8, 100, null, [[null]]], -2];
    expect(flatten(nestedArray)).to.eql([0, 2, 2, 3, 8, 100, -2]);
  });
  it('will return an empty array if non array parameter is supplied', function() {
    var notArray = 1;
    expect(flatten(notArray)).to.eql([]);
  });
  it('will return an array of strings and objects', function(){
    var nestedArray = ["hello", [[{"hello":"hi"}]], ["hey","hi","hello"], "hey"];
    expect(flatten(nestedArray)).to.eql(["hello", {"hello":"hi"}, "hey", "hi", "hello", "hey"]);
  })
});
