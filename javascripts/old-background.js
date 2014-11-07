/*
 * Old stuff
 */
 
function hideEntryDuration() {
  var entryDuration = document.querySelector('.customhours');
  
  var newEntryDuration = entryDuration.cloneNode(true);
  newEntryDuration.removeAttribute('class');
  var parentDiv = entryDuration.parentNode;

  var label = newEntryDuration.querySelector('p')
  label.innerHTML = 'Minutes';

  var input = newEntryDuration.querySelector('input.sethours');
  input.value = input.value * 60;
  input.removeAttribute('id');
  input.removeAttribute('class');
  input.removeAttribute('name');


  function updateOriginalEntry() {
    var originalInput = entryDuration.querySelector('input.sethours');
    originalInput.value = input.value / 60;
    console.log(originalInput.value);
  }

  input.addEventListener('change', function() {
    updateOriginalEntry()
  });

  var moreButton = newEntryDuration.querySelector('.more');
  var lessButton = newEntryDuration.querySelector('.less');

  moreButton.addEventListener('click', function() {
    input.value = input.value * 1 + 5;
    updateOriginalEntry();
  });

  lessButton.addEventListener('click', function() {
    input.value = input.value * 1 - 5;
    updateOriginalEntry();
  })

  // hide old entry duration
  entryDuration.style.display = 'none';
  parentDiv.insertBefore(newEntryDuration, entryDuration);

}

function watchRecords() {
  var records = document.querySelectorAll('.record');

  for (var i = 0; i < records.length; ++i) {
    // records.forEach(function(record, index) {
    console.log(records[i]);
    // console.log(document.querySelector('.el').parentNode);
    records[i].addEventListener('dblclick', function() {
      console.log("dblclicked record");
      setTimeout(function() {
        var editEntry = document.querySelector('.edit_entry');
        console.log(editEntry);

        hideEntryDuration();
      }, 500);
    });
  }
}

setTimeout(function() {
  watchRecords();
}, 1000);