var DigiTime = function(value) {
  this.time    = value;
  this.hours   = this.time.split(':')[0];
  this.minutes = this.time.split(':')[1];
}

DigiTime.prototype = (function() {
  var convertMinutes = function(minutes) {
    console.log(minutes)
    var minutes = (minutes / 60)
      .toString()
      .split('.')[1]
      .substr(0,2);

    return minutes;
  }

  return {
    getTime: function() {
      return this.hours + "." + convertMinutes(this.minutes);
    }
  }
})();
