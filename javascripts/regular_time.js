var RegularTime = function(value) {
  this.time    = value;
  this.hours   = this.time.split('.')[0];
  this.minutes = this.time.split('.')[1];
}

RegularTime.prototype = (function() {
  var pad = function (n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  var convertMinutes = function(minutes) {
    if (minutes.length === 1) {
      minutes += "0";
    }
    minutes *= 0.60;
    return pad(Math.round(minutes), 2);
  }

  return {
    getTime: function() {
      return pad(this.hours, 2) + ":" + convertMinutes(this.minutes);
    }
  }
})();
