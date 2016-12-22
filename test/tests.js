QUnit.module("Existence of objects");

QUnit.test("Constellation object exist", function(assert)
{
  assert.ok(window.constellation, "Constellation object exists")
});

QUnit.test("Star class exists", function(assert)
{
  assert.ok(window.constellation.star, "Star class exists");
});

QUnit.module("Star class");

QUnit.test("Star should have position defined", function(assert)
{
  var star = new constellation.star(0, 0);
  assert.equal(star.x, 0, "X-coordinate should be 0");
  assert.equal(star.y, 0, "Y-coordinate should be 0");
});
