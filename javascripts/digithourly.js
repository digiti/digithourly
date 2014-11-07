var DigitEntry = function(element) {
  this.element = element;
  console.log("new DigitEntry");
  
  this.template = '<input type="text" value=0 tabindex=1 size=5 />'
                + '<a class="more" onclick="return false;"></a>'
                + '<a class="less"></a>'
                + '<p>Minutes</p>';
};

DigitEntry.prototype = (function() {

  var setupCustomInput = function(){
    // hide hours entry
    this.originalEntry = this.element.querySelector('.customhours');
    this.originalEntry.style.display = 'none';

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

  var updateOriginalInput = function() {
    var value = this.newInput.value;
    setOriginalInput.bind(this)(value);
  }

  var setOriginalInput = function(value) {
    this.originalInput.value = value / 60;
    console.log(this.originalInput.value);
  }


  var setupActions = function() {
    
    this.newInput.addEventListener('change', function() {
      setOriginalInput.bind(this)(this.newInput.value);
    }.bind(this));

    var lessButton = this.newEntry.querySelector('.less');
    lessButton.addEventListener('click', decrease.bind(this));

    var moreButton = this.newEntry.querySelector('.more');
    moreButton.addEventListener('click', increase.bind(this));
  }
  
  var decrease = function() {
    this.newInput.value = (this.newInput.value * 1) - 15;
    updateOriginalInput.bind(this)();
  }

  var increase = function() {
    this.newInput.value = (this.newInput.value * 1) + 15;
    updateOriginalInput.bind(this)();
  }

  return {
    improve: function() {
      setupCustomInput.bind(this)();
      setupActions.bind(this)();
    }
  };
})();