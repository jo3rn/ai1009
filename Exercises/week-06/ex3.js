const lazyLoadImages = () => {
  const images = document.querySelectorAll(".lazy");

  for (const image of images) {
    image.src = image.dataset.src;

    image.addEventListener("load", (e) => {
      e.target.removeAttribute("data-src");
      e.target.style.width = "inherit";
    });
  }
};

window.addEventListener("load", lazyLoadImages, false);
