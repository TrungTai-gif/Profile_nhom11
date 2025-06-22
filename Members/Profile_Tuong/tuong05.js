// Cuộn mượt đến section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Hiệu ứng fade-in khi xuất hiện
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Thay đổi navbar khi scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 15, 35, 0.98)";
    navbar.style.backdropFilter = "blur(15px)";
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});

// Hiệu ứng khi hover vào kỹ năng
document.querySelectorAll(".skill-item").forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    const progress = skill.querySelector(".skill-progress");
    progress.style.filter = "brightness(1.2)";
    progress.style.transform = "scaleY(1.2)";
  });

  skill.addEventListener("mouseleave", () => {
    const progress = skill.querySelector(".skill-progress");
    progress.style.filter = "brightness(1)";
    progress.style.transform = "scaleY(1)";
  });
});

// Hiệu ứng đánh máy banner
const bannerText = document.querySelector(".banner p");
const originalText = bannerText.textContent;
bannerText.textContent = "";
let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    bannerText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
setTimeout(typeWriter, 2000);

// Hiệu ứng hạt bay
function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "#40E0D0";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.opacity = "0.7";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";
  particle.style.zIndex = "1";

  document.body.appendChild(particle);

  const duration = Math.random() * 3000 + 2000;
  particle.animate(
    [
      { transform: "translateY(0px)", opacity: 0.7 },
      { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 },
    ],
    {
      duration: duration,
      easing: "linear",
    }
  ).onfinish = () => {
    particle.remove();
  };
}
setInterval(createParticle, 2000);

