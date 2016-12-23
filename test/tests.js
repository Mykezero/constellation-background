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
  var position = Factory.find("position");
  assert.position(star, position, "Position should be 0, 0");
});

QUnit.test("Star has velocity defined", function(assert){
  var star = new constellation.star(0,0,1,1);
  var velocity = Factory.find("velocity");
  assert.velocity(star, velocity, "Velocity should be 1, 1");
});

QUnit.test("Star has default positon and velocity", function(assert)
{
  var position = Factory.find("position");
  var velocity = Factory.find("velocity");
  var star = new constellation.star();
  assert.position(star, position, "Position should be 0, 0");
  assert.velocity(star, velocity, "Velocity should be 1, 1");
});

QUnit.test("Star has a move method", function(assert)
{
  var star = new constellation.star(5, 6, 2, 4);
  assert.ok(star.move, "Star has a move method");
  star.move();
  assert.position(star, {x:7, y:10}, "Position should be 7, 10");
});

var Factory =
{
  define : function(name, factoryMethod)
  {
    this.defines = this.defines || {};
    this.defines[name] = factoryMethod;
  },
  find : function(name)
  {
    this.defines = this.defines || {};
    return this.defines[name]();
  }
};

var Asserts =
{
  define : function(name, result)
  {
    if (!QUnit.assert[name])
    {
      QUnit.assert[name] = function(expected, actual, message)
      {
        this.pushResult({ result: result(expected, actual), actual: actual, expected: expected, message: message });
      };
    }
  }
};

Factory.define("position", () => ({x:0, y:0}));
Factory.define("velocity", () => ({vx:1, vy:1}));

Asserts.define("position", (expected, actual) => expected.x == actual.x && expected.y == actual.y);
Asserts.define("velocity", (expected, actual) => expected.vx == actual.vx && expected.vy == actual.vy);
