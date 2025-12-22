let images = document.querySelectorAll(".gallery img");
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelector(".lightbox-img");
let closeBtn = document.querySelector(".close");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next & Prev
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});

// FILTERS
let filterBtns = document.querySelectorAll(".filters button");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let filter = btn.getAttribute("data-filter");

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    images.forEach(img => {
      let category = img.getAttribute("data-category");
      img.style.display = (filter === "all" || filter === category) ? "block" : "none";
    });
  });
});
