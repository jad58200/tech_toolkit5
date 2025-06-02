document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-button");
  const sideNav = document.getElementById("side-nav");
  const closeBtn = document.getElementById("close-button");
  const headerContainer = document.getElementById("header-container");

  const allLinks = Array.from(sideNav.querySelectorAll("a"));
  const specialLink = document.getElementById("special-link");
  const specialLink1 = document.getElementById("special-link1");

  const navLinksWrapper = document.createElement("div");
  navLinksWrapper.id = "nav-links-wrapper";
  headerContainer.insertBefore(navLinksWrapper, menuBtn);

  function updateLayout() {
    const width = window.innerWidth;
    if (width > 767) {
      allLinks.forEach(link => {
        if (!navLinksWrapper.contains(link)) navLinksWrapper.appendChild(link);
      });
      sideNav.classList.remove("active");
      document.body.style.overflow = "auto";
    } else if (width >= 576 && width <= 767) {
      [specialLink, specialLink1].forEach(link => {
        if (!navLinksWrapper.contains(link)) navLinksWrapper.appendChild(link);
      });
      allLinks.forEach(link => {
        if (![specialLink, specialLink1].includes(link) && !sideNav.contains(link)) {
          sideNav.appendChild(link);
        }
      });
      sideNav.classList.remove("active");
      document.body.style.overflow = "auto";
    } else {
      allLinks.forEach(link => {
        if (!sideNav.contains(link)) sideNav.appendChild(link);
      });
      sideNav.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  menuBtn.addEventListener("click", () => {
    sideNav.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  window.addEventListener("resize", updateLayout);
  updateLayout();

  const heading = document.getElementById("dynamic-heading");
  function adjustHeadingBreaks() {
    if (window.innerWidth < 576) {
      heading.innerHTML = "The Bright <br> Future of Web <br> 3.0?";
    } else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
      heading.innerHTML = "The Bright Future <br> of Web 3.0?";
    } else {
      heading.innerHTML = "The Bright <br> Future of <br> web 3.0?";
    }
  }

  window.addEventListener("resize", adjustHeadingBreaks);
  adjustHeadingBreaks();
});
