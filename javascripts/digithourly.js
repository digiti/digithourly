var DigitEntry = function(element) {
  this.element = element;
  this.unit = 'hours';
  
  this.template = '<input type="text" value=0 tabindex=1 size=5 />'
                + '<a class="more" onclick="return false;"></a>'
                + '<a class="less"></a>'
                + '<p>Minutes</p>';
};

DigitEntry.prototype = (function() {

  var setupCustomInput = function(){
    // hide hours entry
    this.originalEntry = this.element.querySelector('.customhours');
    // this.originalEntry.style.display = 'none';

    // create and insert polyfunctional entry    
    this.newEntry = document.createElement('div');
    this.newEntry.innerHTML = this.template;
    this.newEntry.classList.add('custom-hours');
    this.originalEntry.parentNode.insertBefore(this.newEntry, this.originalEntry);

    // set initial input value
    this.originalInput = this.originalEntry.querySelector('input');
    this.newInput = this.newEntry.querySelector('input');
    this.newInput.value = this.originalInput.value * 60;
  };

  var toggleUnit = function() {
    var label = this.newEntry.querySelector('p');
    var input = this.newEntry.querySelector('input');

    if (this.unit == 'minutes') {
      this.unit = 'hours';
      label.innerHTML = "Hours";
      input.value = input.value / 60;
    } else {
      this.unit = 'minutes';
      label.innerHTML = "Minutes";
      input.value = input.value * 60;
    }
  }

  var updateOriginalInput = function() {
    var value = this.newInput.value;
    setOriginalInput.bind(this)(value);
  }

  var setOriginalInput = function(value) {
    if (this.unit == "hours") {
      this.originalInput.value = value;
    } else {
      this.originalInput.value = value / 60;
    }
  }

  var setupActions = function() {
    
    this.newInput.addEventListener('change', function() {
      setOriginalInput.bind(this)(this.newInput.value);
    }.bind(this));

    var lessButton = this.newEntry.querySelector('.less');
    lessButton.addEventListener('click', decrease.bind(this));

    var moreButton = this.newEntry.querySelector('.more');
    moreButton.addEventListener('click', increase.bind(this));

    var label = this.newEntry.querySelector('p');
    label.addEventListener('click', toggleUnit.bind(this));
  }
  
  var operationPart = function() {
    if (this.unit == "minutes") {
      return 15;
    } else {
      return 0.25;
    }
  }

  var decrease = function() {
    this.newInput.value = (this.newInput.value * 1) - operationPart.bind(this)();
    updateOriginalInput.bind(this)();
  }

  var increase = function() {
    this.newInput.value = (this.newInput.value * 1) + operationPart.bind(this)();
    updateOriginalInput.bind(this)();
  }

  return {
    improve: function() {
      setupCustomInput.bind(this)();
      setupActions.bind(this)();
    }
  };
})();