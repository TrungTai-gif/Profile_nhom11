// 1. Hiệu ứng ảnh .fade-in khi cuộn xuống
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".fade-in"); // Lấy các phần tử có class fade-in

  function checkScroll() {
    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect(); // Vị trí của phần tử so với viewport
      if (rect.top < window.innerHeight * 0.85) {
        img.style.animationDelay = `${index * 0.2}s`; // Tạo hiệu ứng delay dần
        img.classList.add("visible"); // Thêm class để hiển thị (qua CSS animation)
      }
    });
  }

  window.addEventListener("scroll", checkScroll); // Gọi lại khi cuộn
  checkScroll(); // Gọi ngay khi trang vừa tải
});


// 2. Hiệu ứng gõ chữ lặp lại tên và tiêu đề
document.addEventListener("DOMContentLoaded", function () {
  const nameText = "NGUYỄN TRUNG TÀI"; // Nội dung tên
  const titleText = "Lập trình viên Web Developer"; // Nội dung tiêu đề

  // Hàm gõ từng ký tự
  function typeEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i); // Thêm ký tự vào HTML
        i++;
        setTimeout(type, speed); // Delay cho lần tiếp theo
      } else if (callback) {
        setTimeout(callback, 500); // Gọi tiếp callback sau khi gõ xong
      }
    }
    type();
  }

  // Hàm xóa từng ký tự
  function deleteEffect(element, speed, callback) {
    let text = element.innerHTML;
    function erase() {
      if (text.length > 0) {
        text = text.slice(0, -1); // Cắt bớt 1 ký tự cuối
        element.innerHTML = text;
        setTimeout(erase, speed);
      } else if (callback) {
        setTimeout(callback, 500); // Gọi tiếp callback khi xóa xong
      }
    }
    erase();
  }

  // Hàm bắt đầu chu kỳ gõ/xóa lặp lại
  function startTypingLoop() {
    const nameElement = document.getElementById("typing-name");
    const titleElement = document.getElementById("typing-title");

    typeEffect(nameElement, nameText, 100, function () {
      typeEffect(titleElement, titleText, 80, function () {
        setTimeout(() => {
          deleteEffect(titleElement, 50, function () {
            deleteEffect(nameElement, 50, function () {
              setTimeout(startTypingLoop, 500); // Lặp lại toàn bộ quá trình
            });
          });
        }, 1000); // Đợi 1s trước khi xóa
      });
    });
  }

  startTypingLoop(); // Gọi lần đầu khi tải trang
});


// 3. Hiển thị các thẻ kỹ năng khi cuộn
document.addEventListener("DOMContentLoaded", function () {
  function revealSkills() {
    document.querySelectorAll(".skill-card").forEach((card) => {
      const position = card.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (position < screenHeight * 0.85) {
        card.classList.add("visible"); // Hiện thẻ kỹ năng
      }
    });
  }

  window.addEventListener("scroll", revealSkills);
  revealSkills(); // Gọi khi trang vừa tải
});

// 4. Mở / đóng menu chọn ngôn ngữ
function toggleLanguageMenu(event) {
  event.preventDefault(); // Ngăn hành vi mặc định nếu là <a>
  let dropdown = document.getElementById("language-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"; // Đổi trạng thái hiển thị
}

// 5. Tự động đóng menu nếu click ra ngoài
document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("language-dropdown");
  let menu = dropdown.parentElement;

  if (!menu.contains(event.target)) {
    dropdown.style.display = "none"; // Ẩn menu nếu click ngoài vùng menu
  }
});

function toggleCVMenu(event) {
  event.preventDefault();
  let dropdown = document.getElementById("cv-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
  let dropdown = document.getElementById("cv-dropdown");
  let menu = dropdown?.parentElement;
  if (dropdown && menu && !menu.contains(event.target)) {
      dropdown.style.display = "none";
  }
});

// 7. Hiển thị thông báo khi chọn ngôn ngữ
function changeLanguage(lang) {
  alert("Bạn đã chọn: " + (lang === 'vi' ? "Tiếng Việt" : "English"));
}

document.addEventListener("click", function () {
  const music = document.getElementById("mymusic");
  music.muted = false;   // Bỏ mute
  music.play();          // Chơi lại nếu cần
});

// Hiệu ứng cuộn mượt khi click vào các liên kết có dấu #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Kiểm tra tồn tại phần tử
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60, // điều chỉnh offset nếu có navbar
        behavior: 'smooth'
      });
    }
  });
});
