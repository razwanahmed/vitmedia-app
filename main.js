// -------------------sidebar onclick affect---------------------

var menuIcon = document.querySelector('.menu-icon')
var Side_bar = document.querySelector('.sidebar')
var Bannar_size_long = document.querySelector('.bannar')
var video_list_largeer = document.querySelector('.list_container')

menuIcon.onclick = function(){
    Side_bar.classList.toggle("small-sidebar");
    Bannar_size_long.classList.toggle("long_bannar");
    video_list_largeer.classList.toggle("list_container_larger");
};


// var menuIcons = document.querySelector('.menu-icons')
// var Side_bars = document.querySelector('.sidebars')

// menuIcons.onclick = function(){
//     Side_bars.classList.toggle("small-sidebars");
  
// };






