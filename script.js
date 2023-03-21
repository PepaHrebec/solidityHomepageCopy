const btn = document.querySelector(".hdr-icon");
const list = document.querySelector(".hdr-a-wrap-hidden");

btn.addEventListener("click", () => {
  if (list.classList.contains("btn-clicked")) {
    list.classList.add("hdr-a-wrap-hidden");
    list.classList.remove("btn-clicked");
  } else {
    list.classList.add("btn-clicked");
    list.classList.remove("hdr-a-wrap-hidden");
  }
});
