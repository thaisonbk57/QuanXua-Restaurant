const state = {
  showSideDrawer: false
}
const screenHeight = window.screen.availHeight
const screenWidth = window.screen.availWidth

$(function() {
  if (screenWidth <= 900) {
    toggleNavBar()
  }
})

function toggleNavBar() {
  const toggleSideDrawer = () => {
    !state.showSideDrawer
      ? (document.querySelector("#Nav").style.transform = "translateX(0)")
      : (document.querySelector("#Nav").style.transform = "translateX(-110%)")

    document.querySelector("#nav-toggle").classList.toggle("active")

    // toggle showSideDrawer property
    state.showSideDrawer = !state.showSideDrawer
  }
  document.querySelector("#NavToggle").addEventListener("click", e => {
    toggleSideDrawer()
  })
}
