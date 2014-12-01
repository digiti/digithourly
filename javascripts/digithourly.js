var DigitEntry = function(element) {
  this.element = element;

  this.template = '<input type="time" name="cttime" value="23:15:00">';
};

DigitEntry.prototype = (function() {

  var setupCustomInput = function(){
    // hide hours entry
    this.originalEntry = this.element.querySelector('.customhours');
    this.originalEntry.style.display = 'none';

    // create and insert polyfunctional entry
    this.newEntry = document.createElement('div');
    this.newEntry.innerHTML = this.template;
    this.newEntry.classList.add('digithours');
    this.originalEntry.parentNode.insertBefore(this.newEntry, this.originalEntry);

    // set initial input value
    this.originalInput = this.originalEntry.querySelector('input');
    this.newInput = this.newEntry.querySelector('input');
    setNewInput.bind(this)();
  };

  var setNewInput = function() {
    var value = this.originalInput.value;
    var regularTime = new RegularTime(value);
    this.newInput.value = regularTime.convert();
  };

  var setOriginalInput = function(value) {
    var digitime = new DigiTime(value)
    this.originalInput.value = digitime.convert();
  }

  var listenToEvents = function() {
    this.newInput.addEventListener('change', function() {
      setOriginalInput.bind(this)(this.newInput.value);
    }.bind(this));
  }

  return {
    improve: function() {
      setupCustomInput.bind(this)();
      listenToEvents.bind(this)();
    }
  };
})();
