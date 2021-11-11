let header = document.querySelector("header");
let bars = document.querySelector(".bars");

bars.onclick = function () {
  header.classList.toggle("active");
  this.firstChild.classList.toggle("fa-times");
};

// Create Slider
let slides = document.querySelectorAll(".slider-img img");
let nextBtn = document.querySelector(".controls .fa-arrow-right");
let prevBtn = document.querySelector(".controls .fa-arrow-left");
let index = 0;

nextBtn.addEventListener("click", () => {
  btn("next");
});
prevBtn.addEventListener("click", () => {
  btn("prev");
});

function btn(param) {
  if (param === "next") {
    index++;
    if (index === slides.length) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = slides.length - 1;
    } else {
      index--;
    }
  }

  slides.forEach((img) => {
    img.classList.remove("active");
  });
  slides[index].classList.add("active");
}

// Create Taps On Discount Section
let discountBullets = document.querySelectorAll(".discount .bullets span");
let discountContent = document.querySelectorAll(".discount-desc .info");

discountBullets.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeAddClasses(e);

    discountContent.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.content).style.display =
      "flex";
  });
});

// Create Taps On History Section
let historyBullets = document.querySelectorAll(".history .bullets span");
let historyContent = document.querySelectorAll(".history .hide");

historyBullets.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeAddClasses(e);

    historyContent.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
  });
});

function removeAddClasses(ev) {
  // Remove active class from all
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  // Add active class on element
  ev.target.classList.add("active");
}

// Create Filter For Product Section
let productsList = document.querySelectorAll(".products-list li");
let productsBox = document.querySelectorAll(".products .box");

productsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    removeAddClasses(e);

    productsBox.forEach((box) => {
      box.style.display = "none";
    });
    document.querySelectorAll(e.currentTarget.dataset.product).forEach((el) => {
      el.style.display = "block";
    });
  });
});

// Back To Top
let backTop = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
