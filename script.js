document.querySelectorAll("ol li").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.style.fontWeight = "bolder";
  });
});
