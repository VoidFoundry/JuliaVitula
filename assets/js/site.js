// Sections
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
    document.body.classList.add("bgDark");
    homeWeddings.style.color = "hsl(0, 0%, 100%)";
    homeFamilies.style.color = "hsl(0, 0%, 100%)";
    document.getElementById("df-matte").setAttribute("stroke", "hsl(165, 12%, 13%)");
    document.getElementById("df-border-outer").setAttribute("stroke", "hsl(342, 31%, 60%)");
    document.getElementById("df-border-inner").setAttribute("stroke", "hsl(342, 31%, 60%)");
  } else {
    document.body.classList.remove("bgDark");
    //body.classList.add("bgLight");
    homeWeddings.style.color = "hsl(0, 0%, 0%)";
    homeFamilies.style.color = "hsl(0, 0%, 0%)";
    document.getElementById("df-matte").setAttribute("stroke", "hsl(0, 0%, 100%)");
    document.getElementById("df-border-outer").setAttribute("stroke", "hsl(342, 21%, 50%)");
    document.getElementById("df-border-inner").setAttribute("stroke", "hsl(342, 21%, 50%)");
  }
});

if (window.innerWidth > 700) {
  window.addEventListener("scroll", () => {
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

// DECORATIVE FRAME
//Decorative frame object, containing various values to draw the svg/shapes with
let decorativeFrame = {
  exists: false,
  //unit system for setting the values of x/y points in each shape/path. the value of a unit is intended to change depending on the screen size.
  units: {
    //this should probably be changed to a getter, add if statement for different sizes based on window size
    _1: 1 / 120, //at 1920 this equals 16
    get _2() {
      return decorativeFrame.units._1 * 2; //at 1920 this equals 32
    },
    get _3() {
      return decorativeFrame.units._1 * 3; //at 1920 this equals 48
    },
    get _3_5() {
      return decorativeFrame.units._1 * 3.5; //at 1920 this equals 56
    },
    //border was designed with inner stroke alignment but svg only supports center stroke alignment. to keep the stroke in the exact same place as designed the points can be placed in the middle of the designed stroke width, aka shifting their coordinates by half the stroke width.
    get shift() {
      return decorativeFrame.border.stroke.width * 0.5;
    }
  },
  //values for the inner and outer border designs
  border: {
    fill: "none",
    stroke: {
      width: 2,
      color: "hsl(342, 31%, 60%)"
    },
    //inner border
    inner: {
      get x() {
        return (window.innerWidth * decorativeFrame.units._2) + decorativeFrame.units.shift;
      },
      get y() {
        return (window.innerWidth * decorativeFrame.units._2) + decorativeFrame.units.shift;
      },
      get width() {
        return window.innerWidth - (decorativeFrame.border.inner.x * 2);
      },
      get height() {
        return window.innerHeight - (decorativeFrame.border.inner.y * 2);
      }
    },
    //outer border
    outer: {
      topLeft: {
        point1: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._1) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          }
        },
        point2: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          }
        },
        point3: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._1) + decorativeFrame.units.shift;
          }
        }
      },
      topRight: {
        point1: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._1) + decorativeFrame.units.shift;
          }
        },
        point2: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          }
        },
        point3: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._1)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          }
        }
      },
      bottomRight: {
        point1: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._1)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          }
        },
        point2: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          }
        },
        point3: {
          get x() {
            return (window.innerWidth - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._1)) - decorativeFrame.units.shift;
          }
        }
      },
      bottomLeft: {
        point1: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._1)) - decorativeFrame.units.shift;
          }
        },
        point2: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._3) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          }
        },
        point3: {
          get x() {
            return (window.innerWidth * decorativeFrame.units._1) + decorativeFrame.units.shift;
          },
          get y() {
            return (window.innerHeight - (window.innerWidth * decorativeFrame.units._3)) - decorativeFrame.units.shift;
          }
        }
      }
    }
  },
  //values for the matte
  matte: {
    fill: "none",
    stroke: {
      color: "hsl(165, 12%, 13%)",
      get width() {
        return window.innerWidth * decorativeFrame.units._3_5;
      }
    },
    get x() {
      return (window.innerWidth * decorativeFrame.units._3_5) * 0.5;
    },
    get y() {
      return (window.innerWidth * decorativeFrame.units._3_5) * 0.5;
    },
    get width() {
      return window.innerWidth - (decorativeFrame.matte.x * 2);
    },
    get height() {
      return window.innerHeight - (decorativeFrame.matte.y * 2);
    }
  }
};

//Function that will build the svg element (and the shapes within) for the decorative frame, assign it values based on current window size, and insert it into the page
function buildDecorativeFrame() {
  let svg;
  let matte;
  let borderOuter;
  let borderInner;

  //if frame already exists on page grab those elements
  if (decorativeFrame.exists) {
    svg = document.getElementById("df");
    matte = document.getElementById("df-matte");
    borderOuter = document.getElementById("df-border-outer");
    borderInner = document.getElementById("df-border-inner");
  }
  //otherwise (aka if frame does not exist) create the elements
  else {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    matte = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    borderOuter = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    borderInner = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    svg.append(matte);
    svg.append(borderOuter);
    svg.append(borderInner);

    svg.setAttribute("id", "df");
    svg.style.position = "fixed";
    svg.style.zIndex = "9999999";
    svg.style.pointerEvents = "none";

    matte.setAttribute("id", "df-matte");
    matte.setAttribute("fill", decorativeFrame.matte.fill);
    matte.style.transition = "stroke 0.5s ease-in-out";

    borderOuter.setAttribute("id", "df-border-outer");
    borderOuter.setAttribute("fill", decorativeFrame.border.fill);
    borderOuter.style.transition = "stroke 0.5s ease-in-out";

    borderInner.setAttribute("id", "df-border-inner");
    borderInner.setAttribute("fill", decorativeFrame.border.fill);
    borderInner.style.transition = "stroke 0.5s ease-in-out";
  };

  svg.setAttribute("width", window.innerWidth);
  svg.setAttribute("height", window.innerHeight);
  svg.setAttribute("viewBox", "0 0 "
  + window.innerWidth
  + " "
  + window.innerHeight);

  matte.setAttribute("x", decorativeFrame.matte.x);
  matte.setAttribute("y", decorativeFrame.matte.y);
  matte.setAttribute("width", decorativeFrame.matte.width);
  matte.setAttribute("height", decorativeFrame.matte.height);
  matte.setAttribute("stroke", decorativeFrame.matte.stroke.color);
  matte.setAttribute("stroke-width", decorativeFrame.matte.stroke.width);

  borderOuter.setAttribute("points", decorativeFrame.border.outer.topLeft.point1.x
  + ","
  + decorativeFrame.border.outer.topLeft.point1.y
  + " "
  + decorativeFrame.border.outer.topLeft.point2.x
  + ","
  + decorativeFrame.border.outer.topLeft.point2.y
  + " "
  + decorativeFrame.border.outer.topLeft.point3.x
  + ","
  + decorativeFrame.border.outer.topLeft.point3.y
  + " "
  + decorativeFrame.border.outer.topRight.point1.x
  + ","
  + decorativeFrame.border.outer.topRight.point1.y
  + " "
  + decorativeFrame.border.outer.topRight.point2.x
  + ","
  + decorativeFrame.border.outer.topRight.point2.y
  + " "
  + decorativeFrame.border.outer.topRight.point3.x
  + ","
  + decorativeFrame.border.outer.topRight.point3.y
  + " "
  + decorativeFrame.border.outer.bottomRight.point1.x
  + ","
  + decorativeFrame.border.outer.bottomRight.point1.y
  + " "
  + decorativeFrame.border.outer.bottomRight.point2.x
  + ","
  + decorativeFrame.border.outer.bottomRight.point2.y
  + " "
  + decorativeFrame.border.outer.bottomRight.point3.x
  + ","
  + decorativeFrame.border.outer.bottomRight.point3.y
  + " "
  + decorativeFrame.border.outer.bottomLeft.point1.x
  + ","
  + decorativeFrame.border.outer.bottomLeft.point1.y
  + " "
  + decorativeFrame.border.outer.bottomLeft.point2.x
  + ","
  + decorativeFrame.border.outer.bottomLeft.point2.y
  + " "
  + decorativeFrame.border.outer.bottomLeft.point3.x
  + ","
  + decorativeFrame.border.outer.bottomLeft.point3.y);
  borderOuter.setAttribute("stroke", decorativeFrame.border.stroke.color);
  borderOuter.setAttribute("stroke-width", decorativeFrame.border.stroke.width);

  borderInner.setAttribute("x", decorativeFrame.border.inner.x);
  borderInner.setAttribute("y", decorativeFrame.border.inner.y);
  borderInner.setAttribute("width", decorativeFrame.border.inner.width);
  borderInner.setAttribute("height", decorativeFrame.border.inner.height);
  borderInner.setAttribute("stroke", decorativeFrame.border.stroke.color);
  borderInner.setAttribute("stroke-width", decorativeFrame.border.stroke.width);

  //if the frame does NOT exist
  if (!decorativeFrame.exists) {
    document.body.prepend(svg);
    decorativeFrame.exists = true;
    return
  }
  //otherwise (aka if frame does exist)
  else {
    return
  };
}

//When page is loaded call the function to build the decorative frame
buildDecorativeFrame();

//Watch for the window to be resized and, when it is, call the function to update the decorative frame
window.addEventListener("resize", buildDecorativeFrame);
