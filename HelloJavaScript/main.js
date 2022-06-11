// window.onload = function () {
//     document.write("Hello JavaScript!");
// document.onclick = function (e) {
//     debugger;// 類似Java中斷點
//     alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
// };
// let confirmAnswer = confirm("你真的確定你想要取消這個服務嗎?");
// // debugger;
// let thisH1 = document.getElementsByTagName("h1")[0];
// if (confirmAnswer) {
//     thisH1.innerHTML = "服務已取消";
// } else {
//     thisH1.innerHTML = "繼續使用本服務";
// // }
// let promptAnswer = prompt("小明家裡有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫什麼?", "張三")
// let thisH1 = document.getElementById("Response");
// // debugger;
// switch (promptAnswer) {
//     case "張三":
//         thisH1.innerHTML = "那小明是誰?";
//         break;
//     case "小明":
//         thisH1.innerHTML = "聰明";
//         break;
//     default:
//         thisH1.innerHTML = "你想多了";
// }

// };

function showAlert() {
    thisH1.innerHTML = "Hello!";
    // for (let i = 0; i < 10; i++) {
    //     if (i == 3) {
    //         continue;
    //     } 
    //     console.log(i);
    // }
    let person = {
        firstName: "Joe",
        lastName: "Wu",
        height: 165
    };
    for (x in window) {
        // console.log(x + ":" + person[x]);
        console.log(x + ":" + window[x]);
    }
}
let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
// #1 少用，只用一次所以不想取名字，呼叫方法
// thisButton.onclick = function () {
//     showAlert();
// };
// #2 較常見，只在此Case用到，有很多要做的事就塞在沒名字的function中
// thisButton.onclick = function () {
//     thisH1.innerHTML = "Hello!";
// };
// #3 常用，會重複利用，讓點擊Button時執行showAlert
// thisButton.onclick = showAlert;
// #4
thisButton.addEventListener("click", showAlert);