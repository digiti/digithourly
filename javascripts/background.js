document.querySelector('body').addEventListener('mouseup', function(event) {

  function findFormEntry() {  
    var formEntrySelector = 'form.edit_entry:not(.digithourly), form.new_entry:not(.digithourly)';
    var formEntry = document.querySelector(formEntrySelector);

    if (formEntry) {
      // mark entry as custom digithourly entry
      formEntry.classList.add('digithourly');

      // create custom digithourly entry
      var entry = new DigitEntry(formEntry);
      entry.improve();
    }
  }

  setTimeout(findFormEntry, 500);
});