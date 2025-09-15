const search = document.getElementById("search");
  const foods = document.querySelectorAll(".food"); 

  search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase();

    foods.forEach(food => {
      let text = food.textContent.toLowerCase();
      food.style.display = text.includes(value) ? "block" : "none";
    });
  });

  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3, 
  centeredSlides: true, 
  spaceBetween: 20, 
  autoplay: {
    delay: 1400,
    disableOnInteraction: false, 
  },
    breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
      900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const paragraph=document.getElementById("subscribeParagraph");
const input=document.getElementById("subscribeInput");
function subscribe(){
 if(input.value===""){
  paragraph.textContent="";
 }
 else{
  paragraph.textContent="Thank you for subscribing to our channel !  We will get to you through your email ! ❤️";
  paragraph.style.marginTop="-8px";
 }
}


const darkmodeBtn = document.getElementById("toggle-theme");

document.body.classList.toggle("dark-mode", localStorage.getItem("theme") === "dark");
darkmodeBtn.onclick = () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

const btn = document.getElementById("toggle-theme");
const img = btn.querySelector("img");
btn.addEventListener("click", () => {
  if (img.src.includes("night-mode.png")) {
    img.src = "images/brightness.png";
  } else {
    img.src = "images/night-mode.png"; 
  }
});


const addedButton = document.querySelector(".added-btn");
function toggle(btn) {
  if (btn.style.color === "grey") {
    btn.style.color = "red";
    addedButton.classList.add("show");

    setTimeout(() => {
      addedButton.classList.remove("show");
    }, 1500);

  } else {
    btn.style.color = "grey";
  }
}

const cards = document.querySelectorAll(".container1.recipes .food");

cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("show");
  }, index * 200); 
});


function openModal(modalClass) {
  document.querySelector("." + modalClass).style.display = "inline-block";
}

function closeModal(modalClass) {
  document.querySelector("." + modalClass).style.display = "none";
}













