const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryGrid = document.getElementById("galleryGrid");

let currentIndex = 0;  // Menyimpan posisi saat ini di gallery
const visibleCount = 12;  // Menampilkan 12 gambar (3 kolom x 4 baris)
const step = 1; // Geser per 1 kolom (3 gambar, sesuai 1 kolom)
const totalItems = galleryItems.length;

// Fungsi untuk memperbarui tampilan gallery berdasarkan index
function updateGallery() {
  galleryItems.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + visibleCount) {
      item.parentElement.style.display = "block"; // Menampilkan gambar yang sesuai
    } else {
      item.parentElement.style.display = "none"; // Menyembunyikan gambar yang tidak sesuai
    }
  });
}

// Menampilkan gambar pada saat load pertama kali
updateGallery();

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

// Tombol geser kanan (next)
nextBtn.addEventListener("click", () => {
  currentIndex += step;

  // Jika index melebihi jumlah total gambar, kembali ke awal
  if (currentIndex + visibleCount > totalItems) {
    currentIndex = 0; // Looping kembali ke awal
  }

  updateGallery(); // Memperbarui tampilan gallery
});

// Tombol geser kiri (prev)
prevBtn.addEventListener("click", () => {
  currentIndex -= step;

  // Jika index kurang dari 0, kembali ke gambar terakhir
  if (currentIndex < 0) {
    currentIndex = totalItems - visibleCount; // Kembali ke akhir
  }

  updateGallery(); // Memperbarui tampilan gallery
});

// Swipe (opsional untuk perangkat sentuh)
let startX = 0;
galleryGrid.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

galleryGrid.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextBtn.click(); // swipe kiri (geser ke kanan)
  } else if (endX - startX > 50) {
    prevBtn.click(); // swipe kanan (geser ke kiri)
  }
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
      <strong>${name}</strong>
      <span>${comment}</span>
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



