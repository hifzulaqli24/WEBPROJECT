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

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };