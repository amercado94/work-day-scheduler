$(function () {
  var dateDisplayEl = $('#date-display');
  var projectDisplayEl = $('.row');
  var hour = [
    { time: "9 AM" },
    { time: "10 AM" },
    { time: "11 AM" },
    { time: "12 PM" },
    { time: "1 PM" },
    { time: "2 PM" },
    { time: "3 PM" },
    { time: "4 PM" },
    { time: "5 PM" },
  ];
  var rowEl = $('.row');

  hour['0'] = document.getElementById('hour-9');
  console.log(hour);
  hour['1'] = document.getElementById('hour-10');
  hour['2'] = document.getElementById('hour-11');
  hour['3'] = document.getElementById('hour-12');
  hour['4'] = document.getElementById('hour-1');
  hour['5'] = document.getElementById('hour-2');
  hour['6'] = document.getElementById('hour-3');
  hour['7'] = document.getElementById('hour-4');
  hour['8'] = document.getElementById('hour-5');

  var i;
  for (i = 0; i < hour.length; i++) {


    var exactHourEl = hour[i];
    // console.log(exactHourEl);

    // console.log(exactHourEl.children[0].dataset.hour);

    console.log(dayjs().hour(exactHourEl.children[0].dataset.hour));
    var exactHour = dayjs().hour(exactHourEl.children[0].dataset.hour);
    var workHour = dayjs();

    if (exactHour.isBefore(workHour)) {
      console.log("this is in the past");
      rowEl.addClass('past');
    } else if (exactHour.isSame(workHour)) {
      rowEl.addClass('present');
    } else if (exactHour.isAfter(workHour)) {
      console.log("this is in the future");
      rowEl.addClass('future');
    }
    rowEl.append();
    projectDisplayEl.append(rowEl);
  }

  $(".saveBtn").click(function () {
    // template data
    var id = $(this).siblings('.description').attr('id')
    var text = $(this).siblings('.description').val();
    console.log(text);

    localStorage.setItem(id, text)
    // convert to html
    //  $('#1a').html(localStorage.data);
    // view in console
    console.log(id);
  });

  //when page is refreshed, the textarea should show saved value
  //get saved value from local storage

  //target all textarea
  $('.description').each(function () {
    //get the id of each textarea
    var id = $(this).attr('id')
    console.log(id);
    //use the id to get the value from local storage
    var textVal = localStorage.getItem(id)
    console.log(textVal);
    $(this).val(textVal)
  })
  //display the value on textarea


  function displayDate() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }
  displayDate();
  setInterval(displayDate, 1000);
});