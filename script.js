//Filter recipes as you type by checking each .food element to see if its text includes the typed word
const search = document.getElementById("search");
  const foods = document.querySelectorAll(".food"); 

  search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase();

    foods.forEach(food => {
      let text = food.textContent.toLowerCase();
      food.style.display = text.includes(value) ? "block" : "none";
    });
  });

//Swiper slider-JavaScript library
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

//DOM manipulation with onclick() function
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


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-theme");
  if (!btn) return; // nëse nuk ka buton, mos bën asgjë

  // Vendos dark mode sipas localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.querySelector("img").src = "images/brightness.png";
  }

  // Toggle dark mode në click
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Ndryshon imazhin e butonit
    const img = btn.querySelector("img");
    img.src = isDark ? "images/brightness.png" : "images/night-mode.png";
  });
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













