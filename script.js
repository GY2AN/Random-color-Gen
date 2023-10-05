colorArr = ["green", "red", "pink", "black", "yellow", "blue"];
let backColor = document.getElementById("bgContainer");
let btn = document.getElementById("button");

btn.onclick = function(){
    let n = Math.ceil(Math.random()*5);
    backColor.style.backgroundColor = colorArr[n];
}