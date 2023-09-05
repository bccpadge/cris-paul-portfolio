// HeaderScroll
const headerScroll = () => {
  const headerElement = document.querySelector("[data-js-header]");
  this.scrollY >= 30
    ? headerElement.classList.add("active")
    : headerElement.classList.remove("active");
};

window.addEventListener("scroll", headerScroll);

// Mobile navigation
const navbarToggle = document.querySelector("[data-js-mobile-toggle]"),
  navbarMenu = document.querySelector("[data-js-navbar]");

navbarToggle.addEventListener("click", () => {
  navbarMenu.hasAttribute("data-visible")
    ? navbarToggle.setAttribute("aria-expanded", false)
    : navbarToggle.setAttribute("aria-expanded", true);
  navbarMenu.toggleAttribute("data-visible");
});

// Close menu when you click on navbar links
const linksToggleMenu = (e) => {
  if (e.target.classList.contains("navbar__list-link"))
    navbarMenu.removeAttribute("data-visible");
};

window.addEventListener("click", linksToggleMenu);

// a11y slider
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  customPaging: function (index, a11ySlider) {
    return '<button class="mycustombtn">' + index + "</button>";
  },
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: false,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: false,
    },
    960: {
      slidesToShow: 3,
      disable: false, // slider disabled 960px to 1279px
    },
    1280: {
      disable: false,
      slidesToShow: 4,
      dots: true, // dots enabled 1280px and up
    },
  },
});

// scroll reveal
const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
});

sr.reveal(".showcase__title, .showcase__image, .section__metadata, .slider", {
  origin: "top",
  interval: 250,
});

sr.reveal(".services__image-wrapper, .about__information, .post--left", {
  origin: "left",
});

sr.reveal(".services__list, .about__images, .post--right", {
  origin: "right",
});

sr.reveal(".footer__container", {
  origin: "top",
});
