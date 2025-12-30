const burgerBtn = document.querySelector(".header-burger-menu");
const xmark = document.querySelector(".header-xmark-menu");
const headerList = document.querySelector(".header-list");

console.log("", burgerBtn);
console.log("", xmark);
console.log("", headerList);

burgerBtn.addEventListener("click", () => {
  console.log(""); 
  headerList.classList.add("show");
  burgerBtn.style.display = "none";
  xmark.style.display = "block";
});

xmark.addEventListener("click", () => {
  console.log("");
  headerList.classList.remove("show");
  xmark.style.display = "none";
  burgerBtn.style.display = "block";
});
