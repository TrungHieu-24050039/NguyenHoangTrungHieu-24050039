const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active')
  },1100);

  navlinks.forEach(link => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active')
  },1100);

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active');
}

navlinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();

      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      },1100);
    }
  });
});

logolink.addEventListener('click', () => {
  if (!navlinks[0].classList.contains('active')) {
    activePage();

    navlinks[0].classList.add('active');

    setTimeout(() => {
        sections[0].classList.add('active');
      },1100);
  }
});

// Lấy tất cả nút trong phần Resume
const resumeBtns = document.querySelectorAll('.resume-btn');
// Lấy tất cả nội dung chi tiết tương ứng (EXPERIENCE, EDUCATION, SKILLS, ABOUT ME)
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {

    // Xóa class 'active' khỏi tất cả nút
    resumeBtns.forEach(b => {
      b.classList.remove('active');
    });

    // Thêm class 'active' cho nút được click
    btn.classList.add('active');

    // Ẩn toàn bộ phần nội dung
    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });

    // Hiện phần nội dung tương ứng với nút
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio carousel
const imgSlide = document.querySelector('.img-slide');
const images = document.querySelectorAll('.img-item');
const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');

let currentIndex = 0;

function updateSlide() {
  imgSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});

