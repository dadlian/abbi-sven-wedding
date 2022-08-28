function openMenu(){
  setTimeout(() => {
    document.getElementById("main_menu").classList.add("active")
    document.getElementsByClassName("page")[0].style.overflowY = 'hidden'
  })
}

function closeMenu(){
  document.getElementById("main_menu").classList.remove("active")
  document.getElementsByClassName("page")[0].style.overflowY = 'scroll'
}

function globalClick(event){
  if(
      event.target.id !== "main_menu" &&
      event.target.parentElement.id != "main_menu" &&
      document.getElementById("main_menu").classList[1] == 'active'
  ){
    closeMenu()
  }
}

document.body.onclick = globalClick
