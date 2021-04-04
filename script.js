// Add active class to the current button (highlight it)
var listMenu = document.getElementById("list-menu");
var listMenuItem = listMenu.getElementsByClassName("list-item");
console.log(listMenu);
console.log(listMenuItem);
for (var i = 0; i < listMenuItem.length; i++) {
  listMenuItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("list-item-active");
    console.log("current", current);
    current[0].className = current[0].className.replace(
      " list-item-active",
      ""
    );
    this.className += " list-item-active";
  });
}
