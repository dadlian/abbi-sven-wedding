function openMenu(){
  document.getElementById("main_menu").classList.add("active")
  document.getElementsByClassName("page")[0].style.overflowY = 'hidden'
}

function closeMenu(){
  document.getElementById("main_menu").classList.remove("active")
  document.getElementsByClassName("page")[0].style.overflowY = 'scroll'
}
