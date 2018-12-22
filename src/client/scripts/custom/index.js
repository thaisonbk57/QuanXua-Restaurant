const state = {
  showSideDrawer: false
};
const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

$(function() {
  if (screenWidth <= 900) {
    toggleNavBar();
  }

  lazyImage();

  cookieBanner();
});

function toggleNavBar() {
  const toggleSideDrawer = () => {
    !state.showSideDrawer
      ? (document.querySelector("#Nav").style.transform = "translateX(0)")
      : (document.querySelector("#Nav").style.transform = "translateX(-110%)");

    document.querySelector("#nav-toggle").classList.toggle("active");

    // toggle showSideDrawer property
    state.showSideDrawer = !state.showSideDrawer;
  };
  document.querySelector("#NavToggle").addEventListener("click", e => {
    toggleSideDrawer();
  });
}

function lazyImage() {
  const images = Array.prototype.slice.call(
    document.getElementsByClassName("lazy")
  );

  images.forEach(image => {
    if (image.getBoundingClientRect().top < window.innerHeight - 100) {
      const src = image.dataset.src;
      image.setAttribute("src", src);
      image.classList.add("show");
    }

    window.addEventListener("scroll", () => {
      if (image.getBoundingClientRect().top < window.innerHeight - 100) {
        const src = image.dataset.src;
        image.setAttribute("src", src);
        image.classList.add("show");
      }
    });
  });
}

function cookieBanner() {
  const banner = `
  <div class="cookie-banner">
  <div class="row py-1">
    <p class="py-0 col-10 col-sm-12 text-center">
      Wir verwenden Cookies für die Funktionen auf unsere Webseite und um
      die Erfahrung unsere Nutzer zu verbessern.
      <a class="text-primary" href="/impressum.html">Mehr info...</a>
    </p>
    <div class="col-2 col-sm-12 text-center">
      <button id="cookieBtn" class="btn btn-primary">OK</button>
    </div>
  </div>
</div>
  `;

  if (!localStorage.getItem("__cookie_acceptance__")) {
    document.body.insertAdjacentHTML("beforeend", banner);
  }

  if ($("#cookieBBtn")) {
    $("#cookieBtn").on("click", () => {
      localStorage.setItem("__cookie_acceptance__", "true");
      $(".cookie-banner").remove();
    });
  }
}
