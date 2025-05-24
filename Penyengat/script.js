const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryGrid = document.getElementById("galleryGrid");

// Lightbox untuk gambar
galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
    setTimeout(() => {
      lightboxImg.style.transform = "scale(1)";
    }, 100);
  });
});

// Menutup lightbox
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  lightboxImg.style.transform = "scale(0.9)";
});
