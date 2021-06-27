const counter = document.querySelector("#counter");

const plusBtn = document.querySelector("#plus");

const minusBtn = document.querySelector("#minus");

const heartBtn = document.querySelector("#heart");

const pauseBtn = document.querySelector("#pause");

const likesUl = document.querySelector(".likes");

let isPaused = false;

const buttons = [plusBtn, minusBtn, heartBtn]

const submitBtn = document.querySelector("#submit");

const incrementNum = () => {
    if (!isPaused) {
        let num = parseInt(counter.innerText) +1;
        counter.innerText = num;
    }
  };

const startTimer = () => {
    setInterval(incrementNum, 1000)
};

document.addEventListener("DOMContentLoaded", startTimer);

const incrementClick = (event) => {
    event.preventDefault();
    incrementNum();
};

const decrementNum = () => {
    let num = parseInt(counter.innerText) -1;
    counter.innerText = num;
};

const decrementClick = (e) => {
    e.preventDefault()
    decrementNum();
};

plusBtn.addEventListener("click", incrementClick);

minusBtn.addEventListener("click", decrementClick);

const addLike = (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    let content = `${counter.innerText} likes`;
    li.innerText = content;
    likesUl.append(li);
}

heartBtn.addEventListener("click", addLike);

const pauseCounter = () => {
    if (isPaused) {
        isPaused = false;
        pauseBtn.innerText = "pause";
        buttons.forEach((btn) => {
           btn.disabled = isPaused; 
        });
    } else {
        isPaused = true;
        pauseBtn.innerText = "resume";
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
    }
};

pauseBtn.addEventListener("click", pauseCounter);

const createComment = (e) => {
    let content = submitBtn.parentNode.comment.value;
    e.preventDefault();
    const listDiv = document.querySelector("#list");
    const paraEle = document.querySelector("p");
    listDiv.appendChild(paraEle);
    submitBtn.parentNode.comment.value = "";
};

submitBtn.addEventListener("click", createComment);
