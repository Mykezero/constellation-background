(function(root){
  var constellation = function(){
    var star = new function(){}
    return {
      star: star
    }
  }();
  root.constellation = constellation;
})(window)
