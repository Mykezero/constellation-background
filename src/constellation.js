(function(root) {
  var constellation = function() {
    function star(x, y, vx, vy)
    {
      this.x = x || 0;
      this.y = y || 0;
      this.vx = vx || 1;
      this.vy = vy || 1;
    }
    star.prototype.move = function()
    {
      this.x += this.vx;
      this.y += this.vy;
    }
    return { star: star }
  }();
  root.constellation = constellation;
})(window)
