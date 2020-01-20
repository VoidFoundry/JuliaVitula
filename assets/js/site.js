// Sections
const body = document.querySelector("body");
const homeAbout = document.querySelector("#about");
const homeWeddings = document.querySelector("#weddings");
const homeWeddingsText = document
  .querySelector("#weddings")
  .querySelector(".section--text");
const homeCouples = document.querySelector("#couples");
const homeCouplesText = document
  .querySelector("#couples")
  .querySelector(".section--text");
const homeFamilies = document.querySelector("#families");
const homeFamiliesText = document
  .querySelector("#families")
  .querySelector(".section--text");
const homeContact = document.querySelector("#contact");

// Misc Items
const whiteBorder = document.querySelector(".site--border__white");
const pinkBorder = document.querySelector(".site--border__pink");
// const menuText = document.querySelector(".navigation--actions--button");
// const menuLineLong = document.querySelector(
//   ".navigation--actions--lines__long"
// );
// const menuLineShort = document.querySelector(
//   ".navigation--actions--lines__short"
// );
// const nav = document
//   .querySelector("#site-navigation")
//   .querySelector(".navigation--actions");
// const navItems = document.querySelector(".site-nav");
// const closeNav = document.querySelector(".close-nav");
const exploreText = document.querySelector(".home-banner--explore");

//Background Color Shifting
/*
 * TODO: shift colors on top and bottom ~25% instead of half the screen...think I need to know scroll direction...https://codepen.io/lehollandaisvolant/pen/ryrrGx
 * TODO: grab all "sections" within "main" element as a node list to target odds (dark sections) for changing "color" value? intro section would need to be exception and/or added to function below...worth the effort to abstract or just type out names manually?
 */

window.addEventListener("scroll", () => {
  let sectionElements = Array.from(document.querySelectorAll("select"));
  sectionElements.shift(); // remove the first element (aka, the banner)
  const multiplier = 0.5;

  const weddingsTop =
    homeWeddings.getBoundingClientRect().top <= window.innerHeight * multiplier;
  const weddingsBottom =
    homeWeddings.getBoundingClientRect().bottom >=
    window.innerHeight * multiplier;

  const familiesTop =
    homeFamilies.getBoundingClientRect().top <= window.innerHeight * multiplier;
  const familiesBottom =
    homeFamilies.getBoundingClientRect().bottom >=
    window.innerHeight * multiplier;

  if ((weddingsTop && weddingsBottom) || (familiesTop && familiesBottom)) {
    //body.classList.remove("bgLight");
    body.classList.add("bgDark");
    homeWeddings.style.color = "hsl(0, 0%, 100%)";
    homeFamilies.style.color = "hsl(0, 0%, 100%)";
  } else {
    body.classList.remove("bgDark");
    //body.classList.add("bgLight");
    homeWeddings.style.color = "hsl(0, 0%, 0%)";
    homeFamilies.style.color = "hsl(0, 0%, 0%)";
  }
});

if (window.innerWidth > 700) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight / 2) {
      whiteBorder.style.opacity = "0";
      pinkBorder.style.opacity = "100";
    } else {
      whiteBorder.style.opacity = "100";
      pinkBorder.style.opacity = "0";
    }

    if (homeWeddings.getBoundingClientRect().y <= 0) {
      homeWeddingsText.style.position = "fixed";
      homeWeddingsText.style.top = "50%";
      homeWeddingsText.style.transform = "translateY(-50%)";
    } else if (homeWeddings.getBoundingClientRect().y >= 0) {
      homeWeddingsText.style.position = "absolute";
      homeWeddingsText.style.top = "0";
      homeWeddingsText.style.transform = "translateY(0)";
    }
    if (
      window.scrollY >=
      homeWeddings.offsetTop + homeWeddings.offsetHeight - window.innerHeight
    ) {
      homeWeddingsText.style.position = "absolute";
      homeWeddingsText.style.top =
        homeWeddings.offsetHeight - window.innerHeight + "px";
      homeWeddingsText.style.transform = "translateY(0)";
    }

    if (homeCouples.getBoundingClientRect().y <= 0) {
      homeCouplesText.style.position = "fixed";
      homeCouplesText.style.top = "50%";
      homeCouplesText.style.transform = "translateY(-50%)";
    } else if (homeCouples.getBoundingClientRect().y >= 0) {
      homeCouplesText.style.position = "absolute";
      homeCouplesText.style.top = "0";
      homeCouplesText.style.transform = "translateY(0)";
    }
    if (
      window.scrollY >=
      homeCouples.offsetTop + homeCouples.offsetHeight - window.innerHeight
    ) {
      homeCouplesText.style.position = "absolute";
      homeCouplesText.style.top =
        homeCouples.offsetHeight - window.innerHeight + "px";
      homeCouplesText.style.transform = "translateY(0)";
    }

    if (homeFamilies.getBoundingClientRect().y <= 0) {
      homeFamiliesText.style.position = "fixed";
      homeFamiliesText.style.top = "50%";
      homeFamiliesText.style.transform = "translateY(-50%)";
    } else if (homeFamilies.getBoundingClientRect().y >= 0) {
      homeFamiliesText.style.position = "absolute";
      homeFamiliesText.style.top = "0";
      homeFamiliesText.style.transform = "translateY(0)";
    }
    if (
      window.scrollY >=
      homeFamilies.offsetTop + homeFamilies.offsetHeight - window.innerHeight
    ) {
      homeFamiliesText.style.position = "absolute";
      homeFamiliesText.style.top =
        homeFamilies.offsetHeight - window.innerHeight + "px";
      homeFamiliesText.style.transform = "translateY(0)";
    }

    //   if (
    //     homeContact.getBoundingClientRect().y -
    //       menuText.getBoundingClientRect().y -
    //       menuText.offsetHeight <=
    //     0
    //   ) {
    //     menuText.style.color = "rgb(0, 0, 0)";
    //     menuLineLong.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //   } else if (
    //     homeFamilies.getBoundingClientRect().y -
    //       menuText.getBoundingClientRect().y -
    //       menuText.offsetHeight <=
    //     0
    //   ) {
    //     menuText.style.color = "rgb(255, 255, 255)";
    //     menuLineLong.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //   } else if (
    //     homeCouples.getBoundingClientRect().y -
    //       menuText.getBoundingClientRect().y -
    //       menuText.offsetHeight <=
    //     0
    //   ) {
    //     menuText.style.color = "rgb(0, 0, 0)";
    //     menuLineLong.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //   } else if (
    //     homeWeddings.getBoundingClientRect().y -
    //       menuText.getBoundingClientRect().y -
    //       menuText.offsetHeight <=
    //     0
    //   ) {
    //     menuText.style.color = "rgb(255, 255, 255)";
    //     menuLineLong.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //   } else if (
    //     homeAbout.getBoundingClientRect().y -
    //       menuText.getBoundingClientRect().y -
    //       menuText.offsetHeight <=
    //     0
    //   ) {
    //     menuText.style.color = "rgb(0, 0, 0)";
    //     menuLineLong.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //   } else {
    //     menuText.style.color = "rgb(255, 255, 255)";
    //     menuLineLong.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //     menuLineShort.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    //   }
  });
}
// nav.addEventListener("click", () => {
//   navItems.classList.add("open");
//   navItems.classList.remove("closed");
// });

// closeNav.addEventListener("click", () => {
//   navItems.classList.remove("open");
//   navItems.classList.add("closed");
// });

exploreText.addEventListener("click", () => {
  window.scrollTo({
    top: homeAbout.getBoundingClientRect().top,
    behavior: "smooth"
  });
});
