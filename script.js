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

const sections = document.querySelectorAll('.section-contents');
const lists = document.querySelectorAll('#list-menu .list-item');

console.log("sections", sections);
console.log("lists", lists);

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(pageYOffset, sectionTop);
    if (pageYOffset + 70 >= sectionTop)
      current = section.getAttribute("id");
  })
  // console.log("current", current);
  lists.forEach(li => {
    li.classList.remove('list-item-active');
    if (li.classList.contains(current))
      li.classList.add('list-item-active');
  })
})
