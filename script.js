var score1 = 0;
var btn1 = document.querySelector("#Ctrl1");
var pl1 = document.querySelector("#Score1");

var score2 = 0;
var btn2 = document.querySelector("#Ctrl2");
var pl2 = document.querySelector("#Score2");

var rst = document.querySelector("#Rst");

btn1.addEventListener("click", function() {
    score1++;
    pl1.textContent = score1;
});

btn2.addEventListener("click", function() {
    score2++;
    pl2.textContent = score2;
});

rst.addEventListener("click", function() {
    score1 = 0;
    score2 = 0; 
    pl1.textContent = score1;
    pl2.textContent = score2;
});