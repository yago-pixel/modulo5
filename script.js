// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var daily = [
  {
  id: "0",
  hour: "09",
  time:"09",
  meridiem: "am",
  remider: ""
  },
  {
    id: "1",
    hour: "10",
    time"10",
    meridiem: "am",
    remider: ""
  },
  {
    id: "2",
    hour: "11",
    time"11",
    meridiem: "am",
    remider: ""
  },
  {
    id: "3",
    hour: "12",
    time"12",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "4",
    hour: "01",
    time"13",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "5",
    hour: "02",
    time"14",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "6",
    hour: "03",
    time"15",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "7",
    hour: "04",
    time"16",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "8",
    hour: "05",
    time"17",
    meridiem: "pm",
    remider: ""
  },
  {
    id: "9",
    hour: "06",
    time"18",
    meridiem: "pm",
    remider: ""
  },
]

function getHeaderDate(){
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $("currentDay").text(currentHeaderDate);
}
    
function saveReminders(){
  locakStorage.setItem("daily",Json.stringify(daily));
}
function displayReminders(){
  daily.forEach(function (_thishour){
    $(`#${_thishour.id}`).val(_thishour.remider);
  })
}

function 
  