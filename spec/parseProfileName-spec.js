#!javascript
var profile = require("../dev/js//addProfileName");
describe("parseProfileName", function () {
  it("empty returns error", function () {
    //var product = addProfileName(name);
    expect(function(){profile.addProfileName("")}).toThrow();
  });
});