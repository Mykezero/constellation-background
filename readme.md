## Constellation Background Walkthrough Instructions
https://medium.com/@gilmrjc/constellation-background-with-js-and-tdd-5c0b1147296e#.5wbesznhm

### Next Part
The next test checks the position of the star:
QUnit.module("Star class");
QUnit.test("Star has a position defined", function( assert ) {
  var star = new constellation.star(0, 0);
  assert.equal(star.x, 0, "X-coordinate should be 0" );
  assert.equal(star.y, 0, "Y-coordinate should be 0" );
});
