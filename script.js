// function that executes all the functions for the work-day-scheduler
$(function () {
  // variables for todays date and for the save button
  var todayDate = dayjs();
  var saveButton = $('.saveBtn')

  // Click listener, that get's the id of each time block and the userInput and saves it in the localStorage
  saveButton.on('click', function(event){
    event.preventDefault();
    var timeBlockId = $(this).closest('.time-block').attr('id');
    var eventDescr = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, eventDescr);

    // show the saved-message each time the savedButton is clicked
    var savedMessage = $('.saved-message');
    savedMessage.removeAttr('display').show();

    // shows the message for a total of 5 seconds
    var messageDuration = setInterval(function() {
    clearInterval(messageDuration);
    savedMessage.hide();
    },5000);
  });

  // classes past, present and future will be removed and added to each time block, based on the current hour
  // runs a loop through each time block
  $('.time-block').each(function() {
    // parses Integer for hour in the timeBlockId and compares it to the current hour also parsed as Integer
    var timeBlockIdHour = parseInt($(this).attr('id').split('-')[1])
    var currentHour = parseInt(dayjs().format('H'));


  // if condition that removes and applies the classes for past, present and future, based on current hour
  if (timeBlockIdHour < currentHour) {
    $(this).removeClass('future present').addClass('past');
  } else if (timeBlockIdHour === currentHour) {
    $(this).removeClass('past future').addClass('present');
  } else {
    $(this).removeClass('past present').addClass('future');
  }
  });
  


  // Loop that loops through each time-block and gets id and adds the eventDescription based on the id
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var eventDescr = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(eventDescr);
  });


  //display the current date in the header of the page.
  $('#currentDay').text(todayDate.format('dddd, MMMM D'))
});
