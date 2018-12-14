const state = {
  showSideDrawer: false
}

window.onload = e => {
  const screenHeight = window.screen.availHeight
  const screenWidth = window.screen.availWidth

  const toggleSideDrawer = () => {
    !state.showSideDrawer
      ? (document.querySelector("#Nav").style.transform = "translateX(0)")
      : (document.querySelector("#Nav").style.transform = "translateX(-110%)")

    document.querySelector("#nav-toggle").classList.toggle("active")

    // toggle showSideDrawer property
    state.showSideDrawer = !state.showSideDrawer
  }

  if (screenWidth <= 900) {
    document.querySelector("#NavToggle").addEventListener("click", e => {
      toggleSideDrawer()
    })
  }
}
