
var ul = $('#timestamps');
var scheduleItemsToSave = [];
 //calls out to the moment method to calculate and format dates/times
var todaysDateHeader = moment();


function updateTime(){
    
    $("#currentDay").text(moment().format(' MMMM D, YYYY H:mm:ss'));
    // console.log(todaysDateHeader);
    setInterval(updateTime, 1000);
};

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var periods = ['AM', 'PM'];
var savedSchedule = JSON.parse(localStorage.getItem('hour'));
// console.log(savedSchedule);

//create hour schedule list
for (let i = 0; i < hours.length; i++) {
    var li = $('<li>');
    li.css('display', 'flex');
    li.addClass('row');

    var spanTimeText = $('<span>');
    spanTimeText.css('flex-grow', '2');
    spanTimeText.addClass('hour');

    var textInput = $('<input>');
    textInput.css('flex-grow', '8');
    if (savedSchedule != null) {
        textInput.val(savedSchedule[i]);
        scheduleItemsToSave = savedSchedule;
    }

    var localSaveButton = $('<button type="button">');
    localSaveButton.css('flex-grow', '2');
    localSaveButton.addClass('saveBtn');
    localSaveButton.text('Save');

    var hour = hours[i];
    if (i < 3) {
        //creates AM timestamp list items
        spanTimeText.text(hour + periods[0]);
        // console.log(spanTimeText);
    } else if (i == 3) {
        //creates 12PM timestamp list item
        spanTimeText.text(hour + periods[1]);
    } else {
        //creates the remaining PM timestamp list items
        spanTimeText.text((hour - 12) + periods[1]);
        // console.log(spanTimeText);
    }

    //when input added add input to scheduleItems array
    textInput.bind('keyup', function () {
        scheduleItemsToSave[i] = (this.value);
        // console.log(scheduleItemsToSave);
    })

    //create event listener for each save btn
    localSaveButton.click(function () {
        localStorage.setItem('hour', JSON.stringify(scheduleItemsToSave));
        // console.log(scheduleItemsToSave);
    });

    //append information to windows screen
    li.append(spanTimeText);
    li.append(textInput);
    li.append(localSaveButton);
    pastPresFut(i, textInput);
    ul.append(li);

}


//highlight textInput container based on time of day
function pastPresFut(i, textInputSection) {
    var currentHour = todaysDateHeader.get('hour');
    // console.log(currentHour);
    // console.log("i value = ", i);
    // console.log('h[i] = ', hours[i]);
    if (hours[i] < currentHour) {
        textInputSection.addClass('past');
    } else if (hours[i] == currentHour) {
        textInputSection.addClass('present');
    } else {
        textInputSection.addClass('future');
    }

}

document.addEventListener('DOMContentLoaded', updateTime());
