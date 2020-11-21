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
const drag = (e) => {
  console.log("you drag me");
};
