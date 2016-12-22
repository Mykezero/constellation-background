(function(root) {
  var constellation = function() {
    function star(x, y)
    {
      this.x = x;
      this.y = y;
    }
    return { star: star }
  }();
  root.constellation = constellation;
})(window)
