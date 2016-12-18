QUnit.module("Existence of objects");

QUnit.test("Constellation object exist", function(assert)
{
  assert.ok(window.constellation, "Constellation object exists")
});

QUnit.test("Star class exists", function(assert)
{
  assert.ok(window.constellation.star, "Star class exists");
});
