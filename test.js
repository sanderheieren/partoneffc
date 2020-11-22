const heart = document.querySelectorAll(".heart");

console.log(heart);
const arr = Array.from(heart);
const arr1 = [...heart];
console.log(arr[0], arr1);
let total = 0;
const counter = () => {
  total += 1;
};
arr[0].addEventListener("animationiteration", counter);
arr[0].addEventListener("dragend", counter);

const drag = (e) => {
  console.log("you're dragging me");
};
const dragEnd = (e) => {
  console.log("your drag ended");
};
const toggleHeart = () => {
  if (heart[0].style["animation-name"]) {
    heart[0].style["animation-name"] = "";
  } else {
    heart[0].style["animation-name"] = "heart";
  }
};
