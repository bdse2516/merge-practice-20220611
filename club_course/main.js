// $(function () {
//     $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

//     //一秒鐘有1000毫秒 // 1 sec = 1000 ms
//     //每分鐘60秒、每小時60分鐘、每天24小時 // 計算一天的秒數量
//     let millisecsPerDay = 24 * 60 * 60 * 1000;
//     //YYYY/MM/DD
//     //MM/DD/YYYY
//     //DD/MM/YYYY
//     //YY-MM-DD

//     var topicCount = topic.length;

//     for (var x = 0; x < topicCount; x++) {
//         $("#courseTable").append("<tr>" +
//             `<td>${x + 1}</td>` +
//             `<td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().substring(5)}</td>` +
//             `<td>${topic[x]}</td></tr>`
//         )
//     }
// });

$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //1 sec = 1000 ms
    //計算一天的秒數量
    let millisecsPerDay = 24 * 60 * 60 * 1000;
    //YYYY/MM/DD
    //MM/DD/YYYY
    //DD/MM/YYYY
    //YYYY-MM-DD
    for (var x = 0; x < topicCount; x++) {

        // 課本
        // $("#courseTable").append(`<tr>
        //     <td>${x + 1}</td>
        //     <td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()}</td>
        //     <td>${topic[x]}</td></tr>`
        // );

        // 原註解
        // $("#courseTable").append(`<tr>
        //     <td>${x + 1}</td>
        //     <td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`
        // );

        // lab trying
        var thisDateObject = new Date(startDate.getTime() + 7 * x * millisecsPerDay);
        $("#courseTable").append(
            `<tr><td>${x + 1}</td><td>${thisDateObject.getMonth() + 1}/${thisDateObject.getDate()}</td><td>${topic[x]}</td></tr>`
        );


        //讓停課的那幾天字變灰色 最好在生成時就是灰色 事後比較容易亂
        
        // if (topic.includes("停課")) {
        //     document.topic.style.color = "gray";
        // }

    }
});