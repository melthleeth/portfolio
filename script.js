// Add active class to the current button (highlight it)
// var listMenu = document.getElementById("list-menu");
// var listMenuItem = listMenu.getElementsByClassName("list-item");
// console.log(listMenu);
// console.log(listMenuItem);
// for (var i = 0; i < listMenuItem.length; i++) {
//   listMenuItem[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("list-item-active");
//     console.log("current", current);
//     current[0].className = current[0].className.replace(
//       " list-item-active",
//       ""
//     );
//     this.className += " list-item-active";
//   });
// }

const sections = document.querySelectorAll(".section-contents");
const lists = document.querySelectorAll("#list-menu .list-item");

console.log("sections", sections);
console.log("lists", lists);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(pageYOffset, sectionTop);
    if (pageYOffset + 150 >= sectionTop) current = section.getAttribute("id");
  });
  // console.log("current", current);
  lists.forEach((li) => {
    li.classList.remove("list-item-active");
    if (li.classList.contains(current)) li.classList.add("list-item-active");
  });
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

var slideIndex = [1,1, 1];
var slideId = ["slide-happyhouse", "slide-bangba", "slide-halaltimes"];
// showSlides(1, 0);
// showSlides(1, 1);
for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i); 
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}