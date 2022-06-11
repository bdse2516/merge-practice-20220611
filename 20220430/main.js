document.body.style.color = "blue";
// document.body.style.backgroundImage = 'url('+'https://www.w3schools.com/cssref/paper.gif'+')';


let thisH1 = document.getElementsByName("abc")[0];
let thisButton = document.getElementsByTagName("button")[0];
thisButton.addEventListener("click", showAlert);
// thisButton.addEventListener("click", showAlert);
// let d = new Date();

function showAlert() {
    // let myFriends = new Array("John","Mary","David",123);
    // let myFriends_string = "John,Marry,David";
    // let myFriends_array = myFriends_string.split(",");
    // let myFriends = ["John", "Marry", "David"];
    let myFriends = ['https://www.w3schools.com/cssref/paper.gif', 'https://3.bp.blogspot.com/-gpkZGUDntes/T8QT0SKVQ7I/AAAAAAAAB5U/_N8ISn2GITU/s1600/colorful_web_background_image.jpg', 'https://i.pinimg.com/474x/af/b6/d9/afb6d99af51006ae46e855d6b9796c51--light-orange-background-patterns.jpg'];
    // thisH1.innerHTML = myFriends_array.join(" | ");
    thisH1.innerHTML = Math.floor(Math.random() * 10) + 1;
    document.body.style.backgroundImage = 'url(' + myFriends[Math.floor(Math.random() * myFriends.length)] + ')';
    // myFriends[0] = "John";
    // myFriends[1] = "Mary";
    // myFriends[2] = "David";
    // myFriends[3] = 123;
    // thisH1.innerHTML = "[" + myFriends[0] + "|" + myFriends[1] + "|" + myFriends[2] + "|" + myFriends[3] + "]";
    // console.log(typeof (myFriends[2]));
    // var d = new Date()
    // thisH1.innerHTML = d.toLocaleString();
    // alert("hi");
    // alert("字串長度 : " + thisH1.innerHTML.length + "\n" +
    //     "World在第" + thisH1.innerHTML.indexOf("World") + "位置" + "\n" +
    //     "第一個字" + thisH1.innerHTML.split(" ")[0] + "\n" +
    //     "第二個字" + thisH1.innerHTML.split(" ")[1]);
}