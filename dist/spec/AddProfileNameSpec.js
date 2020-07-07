describe("Profile Name", function() {
    var profileName;
  
    beforeEach(function() {
        profileName = new ProfileName();
    });
  
    it("Deal with empty input", function() {

      expect(function(){profileName.parseName("")}).toThrow();

    });
    it("To split the name into an array", function() {
        var name = "Daniel Philip Johnson";
        var outcome = ['Daniel','Philip','Johnson'];
        expect(profileName.parseName(name)).toEqual(outcome);
  
      });
  });
  