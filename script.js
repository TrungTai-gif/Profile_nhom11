// Hiệu ứng cuộn mượt mà cho các liên kết trong thanh điều hướng
document.querySelectorAll('.thanh-dieu-huong a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60, // Trừ chiều cao của thanh điều hướng
      behavior: 'smooth'
    });
  });
});

// Hiệu ứng xuất hiện khi cuộn đến các phần tử
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hien-thi');
    }
  });
});

document.querySelectorAll('.the-ve-chung-toi, .the-dich-vu, .thanh-vien-doi-ngu').forEach(element => {
  element.classList.add('an'); // Thêm class ẩn ban đầu
  observer.observe(element); // Quan sát phần tử
});

// Hiệu ứng hover cho nút
document.querySelectorAll('.nut-chinh').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Hiệu ứng đánh máy cho tiêu đề "Nhóm 11"
const tieuDe = document.getElementById('tieu-de-nhom');
const text = 'Nhóm 11';
let index = 0;


function goChu() {
  if (index < text.length) {
    tieuDe.textContent += text.charAt(index);
    index++;
    setTimeout(goChu, 150); // tốc độ gõ chữ
  } else {
    // Sau khi gõ xong, tạo hiệu ứng nhấp nháy nhẹ
    tieuDe.classList.add('nhap-nhay');
  }
}

goChu();
