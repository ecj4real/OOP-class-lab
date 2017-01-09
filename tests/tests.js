(function(){
  'use strict';

  var app = require("../app/animal")
  describe("Animal Class", function() {

    it("The Animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var lion = new app.Animal('Lion');
      expect(typeof lion).toEqual(typeof {});
      expect(lion instanceof app.Animal).toBeTruthy();
    });

    it("The Animal Color should be Black if no color is passed", function() {
      var goat = new app.Animal("Goat");
      expect(goat.name).toEqual('Goat');
      expect(goat.color).toBe('Black');
    });

    it("The number of legs to be 4 if no number is passed", function() {
      var goat = new app.Animal("Goat");
      expect(goat.name).toEqual('Goat');
      expect(goat.numOfLegs).toBe(4);
    });

    it("Animal can eat", function() {
      var goat = new app.Animal("Goat");
      expect(goat.eat()).toEqual('I can eat anything!!!');
    });

    it("Animal can move", function() {
      var goat = new app.Animal("Goat");
      expect(goat.move()).toEqual('Of course, I can move');
    });

    it("Animal with two legs", function() {
      var man = new app.Animal("Man");
      man.numOfLegs = 2;
      expect(man.numOfLegs).toBe(2);
    });

    it("Man that has two legs and Dark Brown in color", function() {
      var man = new app.Animal("Man");
      man.numOfLegs = 2;
      man.color = "Dark Brown"
      expect(man.numOfLegs).toBe(2);
      expect(man.color).toEqual('Dark Brown');
    });

    it("Expects Animal name to be property of Animal", function() {
      var goat = new app.Animal("Goat");
      expect(goat.name).toEqual('Goat');
    });

    it("Change number of eyes to 4", function() {
      var goat = new app.Animal("Goat");
      goat.numOfEyes = 4;
      expect(goat.numOfEyes).toBe(4);
    });

    it("Number of eyes to be two by default", function() {
      var man = new app.Animal("Man");
      expect(man.numOfEyes).toBe(2);
    });

  });
})();