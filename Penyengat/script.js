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

 document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const comment = document.getElementById("commentInput").value.trim();
  const display = document.getElementById("commentDisplay");

  if (name && comment) {
    // Hapus pesan default jika masih ada
    const emptyMsg = display.querySelector("p.text-muted");
    if (emptyMsg) {
      emptyMsg.remove();
    }

    // Buat elemen kartu komentar
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment-card");
    commentElement.innerHTML = `
  <div class="comment-avatar">${name.charAt(0).toUpperCase()}</div>
  <div class="comment-content">
    <strong>${name}</strong>
    <p>${comment}</p>
  </div>
`;

    // Tambahkan ke container
    display.prepend(commentElement); // prepend agar komentar terbaru di atas

    // Jika lebih dari 3 komentar, otomatis muncul scroll
    if (display.children.length > 3) {
      display.style.overflowY = "auto";
    }

    // Reset form
    document.getElementById("commentForm").reset();
  }
});

