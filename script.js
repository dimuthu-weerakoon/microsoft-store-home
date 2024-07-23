let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
const delay = 5000;

let items = document.querySelectorAll(".slide .item");

let naviDotsContainer = document.querySelector('.navigation-dots')

let navigationDots = document.querySelectorAll('.dot');




items.forEach((item) => {
  item.addEventListener("click", () => {
    let parent = item.parentNode;
    parent.removeChild(item);
    parent.insertBefore(item, parent.children[1]);
  
  });

});

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".slide .item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", () => {
  let items = document.querySelectorAll(".slide .item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

setInterval(() => {
  let items = document.querySelectorAll(".slide .item");
  document.querySelector(".slide").appendChild(items[0]);
}, delay);