
var ul = $('#timestamps');
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var todaysDateHeader = moment(); //calls out to the moment method to calculate and format dates/times
$("#currentDay").text(todaysDateHeader.format("LLLL"));
// console.log(todaysDateHeader);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var periods = ['AM', 'PM'];
for (let i = 0; i < hours.length; i++) {
    var li = $('<li>');
    li.css('display', 'flex');
    li.addClass('row');

    var spanTimeText = $('<span>');
    spanTimeText.css('flex-grow', '2');
    spanTimeText.addClass('hour');

    var textInput = $('<input>');
    textInput.css('flex-grow', '8');

    var localSaveButton = $('<button type="button" >');
    localSaveButton.css('flex-grow', '2');
    localSaveButton.addClass('saveBtn');
    
    var hour = hours[i];
    if (i < 3) {
        //creates AM timestamp list items
        spanTimeText.text(hour + periods[0]);
        console.log(spanTimeText);
    } else {
        //creates PM timestamp list items
        spanTimeText.text(hour + periods[1]);
        console.log(spanTimeText);
    }
    li.append(spanTimeText);
    li.append(textInput);
    li.append(localSaveButton);
    ul.append(li);
    
}
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function pastPresFut(li) {

}
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

var buttons = Array.from($(".saveBtn"));
// console.log(buttons);
for(let i = 0; i< buttons.length; i++){
    buttons[i].on('click', function(){
        localStorage.set()
    })
}


// WHEN I refresh the page
// THEN the saved events persist