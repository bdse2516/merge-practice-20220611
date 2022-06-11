let foodImages = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/156685/96a7420fa7879c00.jpg",
    "https://shopping.udn.com/blog/public/uploads/edImages/20210423062930967.jpg"
];

$(function () {
    // console.log("Yo");
    $("input").on("click", function () {
        // alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", foodImages[randomChildNumber]);
    });
});