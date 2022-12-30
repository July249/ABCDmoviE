const selectTheater = document.querySelector(".selectTheater-container");
const selectBtns = selectTheater.querySelectorAll(".btn-select");

const selectRegionOptions = selectTheater.querySelector(
  ".select-region-wrapper"
);
const selectCompanyOptions = selectTheater.querySelector(
  ".select-company-wrapper"
);
const selectTheaterOptions = selectTheater.querySelector(
  ".select-theater-wrapper"
);

selectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("region")) {
      selectRegionOptions.classList.toggle("on");
      if (selectRegionOptions.classList.contains("on")) {
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-up.png?raw=true"
        );
      } else {
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-down.png?raw=true"
        );
      }
    } else if (btn.classList.contains("company")) {
      selectCompanyOptions.classList.toggle("on");
      if (selectCompanyOptions.classList.contains("on")) {
        console.log(btn.children);
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-up.png?raw=true"
        );
      } else {
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-down.png?raw=true"
        );
      }
    } else if (btn.classList.contains("theater")) {
      selectTheaterOptions.classList.toggle("on");
      if (selectTheaterOptions.classList.contains("on")) {
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-up.png?raw=true"
        );
      } else {
        btn.children[0].setAttribute(
          "src",
          "https://github.com/Already-12-O-clock/ABCDmoviE/blob/main/src/img/icon-Triangle-down.png?raw=true"
        );
      }
    }
  });
});

selectRegionOptions.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    selectBtns.forEach((btn) => {
      if (btn.classList.contains("region")) {
        btn.textContent = e.target.textContent;
        selectRegionOptions.classList.remove("on");
      }
    });
  }
});

selectCompanyOptions.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    selectBtns.forEach((btn) => {
      if (btn.classList.contains("company")) {
        btn.textContent = e.target.textContent;
        selectRegionOptions.classList.remove("on");
      }
    });
  }
});

selectTheaterOptions.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    selectBtns.forEach((btn) => {
      if (btn.classList.contains("theater")) {
        btn.textContent = e.target.textContent;
        selectRegionOptions.classList.remove("on");
      }
    });
  }
});
