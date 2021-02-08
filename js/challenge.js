
const lower = document.getElementById("minus");
const higher = document.getElementById("plus");
const like = document.getElementById("heart");
const likes = document.getElementById("likes");
const pause = document.getElementById("pause");
const addComment = document.getElementById("submit");
const comments = document.getElementById("list");
let counter = document.getElementById("counter");

let tl = 0;

let countUp = setInterval(function() {
    if (pause.innerText == "pause") {   
        counter.innerHTML++;
    }
}, 1000);

pause.addEventListener("click", (e) => {
    if (pause.innerText == "pause") {
        pause.innerText = "start";
        higher.disabled = true;
        lower.disabled = true;
        like.disabled = true;
        addComment.disabled = true;   
    } else {
        pause.innerText = "pause";
        higher.disabled = false;
        lower.disabled = false;
        like.disabled = false;
        addComment.disabled = false;   
    }
}); 

lower.addEventListener("click", (e) => {
    counter.innerHTML--;
});

higher.addEventListener("click", (e) => {
    counter.innerHTML++;
});

like.addEventListener("click", (e) => {
    if (document.getElementById(`${counter.innerHTML}`)) {
        let li = document.getElementById(`${counter.innerHTML}`)
        tl++
        li.innerText = `${counter.innerHTML} has been liked ${tl} times`;
    } else {
        let li = document.createElement("li");
        li.setAttribute("id", `${counter.innerHTML}`)
        tl = 1
        li.innerText = `${counter.innerHTML} has been liked ${tl} time`;
        likes.appendChild(li);
    }
});

addComment.addEventListener("click", (e) => {
    e.preventDefault();
    let comment = document.getElementById("comment-input").value;
    let p = document.createElement("p")
    p.innerText = comment
    comments.appendChild(p)
});