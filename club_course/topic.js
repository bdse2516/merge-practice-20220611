var topic = [
    "停課-尚未開學",
    "停課-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay) {
    //一次設定好月分與日期
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5, 3);

let myDate = new Date(document.getElementById("myDate")[0]);

function onChange(){
    myDate.innerHTML = document.getElementById("myDate")[0];
    setMonthAndDay(myDate.getMonth, myDate.getDate);
}

myDate.addEventListener("onchange",onChange)