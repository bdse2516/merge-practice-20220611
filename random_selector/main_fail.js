window.onload = function () {
    // document.write("Hello JavaScript");
}

let foodImages = [
    "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-9/94324718_2537416933241180_5811219347103809536_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9_N8wgBgmp8AX8YzCwK&_nc_ht=scontent.ftpe8-2.fna&oh=00_AT9Ej_kYW2iVUR_lW5_sBF5tU2meJF-9esWYh7BXQr0KdQ&oe=6293E90F",
    "https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/274922624_470529104734091_34047009255374249_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=wklo7MptfrUAX_TUUED&tn=IP5YI_UVLtiwz4Ab&_nc_ht=scontent.ftpe8-2.fna&oh=00_AT-YIZH8R-JKpTvOsNwKkAd43pYtH8QOeql08i6XAU4ByQ&oe=6275266C"
]

$(function () {
    $("input").on("click", function () {
        // alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src", foodImages[randomChildNumber]);
    });
});