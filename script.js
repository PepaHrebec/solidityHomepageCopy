const btn = document.querySelector(".hdr-icon");
const list = document.querySelector(".hdr-a-wrap");

btn.addEventListener("click", () => {
  list.classList.contains("btn-clicked")
    ? list.classList.remove("btn-clicked")
    : list.classList.add("btn-clicked");
});
