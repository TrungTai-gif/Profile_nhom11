//giới thiệu
const typingEl = document.querySelector('.typing');
  const phrases = ['Sinh viên CNTT', 'Frontend Developer', 'Người yêu công nghệ'];
  let current = 0, char = 0;

  function type() {
    if (char < phrases[current].length) {
      typingEl.innerHTML += phrases[current].charAt(char);
      char++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (char > 0) {
      typingEl.innerHTML = phrases[current].substring(0, char - 1);
      char--;
      setTimeout(erase, 50);
    } else {
      current = (current + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

document.addEventListener("DOMContentLoaded", type);
  
// kỹ năng
document.addEventListener("DOMContentLoaded", function () {
    const tienElements = document.querySelectorAll(".tien");
  
    tienElements.forEach(tien => {
      // Lưu giá trị phần trăm thật và reset về 0
      const fullPercent = tien.style.width;
      tien.setAttribute("data-percent", fullPercent);
      tien.style.width = "0";
      tien.innerText = "0%";
    });
  
    // Tạo observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const tien = entry.target;
          const fullPercent = parseInt(tien.getAttribute("data-percent"));
  
          let current = 0;
          const interval = setInterval(() => {
            if (current >= fullPercent) {
              clearInterval(interval);
            } else {
              current++;
              tien.style.width = current + "%";
              tien.innerText = current + "%";
            }
          }, 10); // chỉnh tốc độ chạy (10ms cho mượt)
  
          obs.unobserve(tien);
        }
      });
    }, {
      threshold: 0.5
    });
  
    // Gắn observer cho mỗi .tien
    tienElements.forEach(tien => {
      observer.observe(tien);
    });
});
  
// ẩn hiện
document.addEventListener("DOMContentLoaded", () => {
    const phanTuAn = document.querySelectorAll(".an");
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hien");
            observer.unobserve(entry.target); // chỉ chạy 1 lần
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    phanTuAn.forEach(el => observer.observe(el));
  });
  