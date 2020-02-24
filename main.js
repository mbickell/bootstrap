const items = document.querySelectorAll("ul li");
items.forEach(item => {
  item.addEventListener("click", () => {
    if (item.style.textDecoration === "line-through") {
      item.style.textDecoration = "none";
    } else {
      item.style.textDecoration = "line-through";
    }
  });
});
