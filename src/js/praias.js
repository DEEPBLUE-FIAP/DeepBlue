var commenticon = document.getElementById("comment");
var commentbox = document.getElementById("comment-session");

var commenticon2 = document.getElementById("comment2");
var commentbox2 = document.getElementById("comment-session2");

var commenticon3 = document.getElementById("comment3");
var commentbox3 = document.getElementById("comment-session3");

var commenticon4 = document.getElementById("comment4");
var commentbox4 = document.getElementById("comment-session4");

var commenticon5 = document.getElementById("comment5");
var commentbox5 = document.getElementById("comment-session5");




commenticon.addEventListener("click", () => {
    commentbox.classList.toggle("active");
});

commenticon2.addEventListener("click", () => {
    commentbox2.classList.toggle("active");
});

commenticon3.addEventListener("click", () => {
    commentbox3.classList.toggle("active");
});

commenticon4.addEventListener("click", () => {
    commentbox4.classList.toggle("active");
});

commenticon5.addEventListener("click", () => {
    commentbox5.classList.toggle("active");
});

