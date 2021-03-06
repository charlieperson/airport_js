describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("initializes plane's landed property as false", function() {
    expect(plane.landed).toBe(false);
  });

  describe("#land", function(){
    it("changes landed to true", function() {
      plane.land();
      expect(plane.landed).toBe(true);
    });
  });

  describe("#takeOff", function() {
    it("changes landed to false", function() {
      plane.land();
      plane.takeOff();
      expect(plane.landed).toBe(false);
    });
  });
});
