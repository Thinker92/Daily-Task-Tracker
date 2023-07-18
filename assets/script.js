// Waiting for HTML DOM to load before starting any code
$(function () {
  let now = dayjs().format('MMMM DD, YYYY');
  $("#currentDay").text(now)

  const saveBtn = $(".saveBtn");
  saveBtn.on("click", function(event) {
    event.preventDefault();
    // Using ".siblings()" to pick any save button and get access to data faster
    let hour = $(this).siblings(".hour").text();
    console.log(hour);
    let data = $(this).siblings(".description").val();
    console.log(data)
    localStorage.setItem(hour,data);

  })

  function hourBlockFormatting() {
    // Get current time (HH){int}
    let hour = dayjs().hour();
    // console.log(hour);
    // For each time block
    $(".time-block").each(function(){
      // get hour from HTML id
      let curHour = parseInt($(this).attr("id"));
      // console.log(curHour);
      // Determine past,present,or future and add class
      if (curHour > hour){
        $(this).addClass("future");
      } else if (curHour === hour) {
        $(this).addClass("present");;
      } else {
        $(this).addClass("past");
      }
    })
  }
// Calling the formatting function
  hourBlockFormatting();
  
  function getSavedItems() {
    $(".hour").each(function () {
      let currHour = $(this).text();
      // console.log(currHour);
      let currItem = localStorage.getItem(currHour);
      // console.log(currItem);

      if (currItem !== null){
        $(this).siblings(".description").val(currItem);
      }
    })
  }
  getSavedItems();
});
