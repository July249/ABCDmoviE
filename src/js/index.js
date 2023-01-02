import MovieData from "./getMovieData.js";

const fetchAPI = new MovieData();
const data = await fetchAPI.getMovieData();

const carousel = document.querySelector(".main-carousel");
const imageContainer = carousel.querySelector(".item-list");
const imageLis = carousel.querySelectorAll(".item-list > li");

window.addEventListener("load", async () => {
  const boxOfficeMovieInfoArr = [];

  data.items.map((item) => {
    const resultObj = {};
    resultObj["title"] = fetchAPI.filterTitleReg(item.title);
    resultObj["image"] = item.image;
    boxOfficeMovieInfoArr.push(resultObj);
  });

  const carouselImgDataArr = boxOfficeMovieInfoArr.slice(0, 5);

  carouselImgDataArr.forEach((imgInfoObj, idx) => {
    imageLis[idx].innerHTML = `
      <img src=${imgInfoObj.image} alt="${imgInfoObj.title}" style="width: 100%" />
    `;
  });
});

imageLis.forEach((imageLi) => {
  imageLi.addEventListener("click", (e) => {
    const targetNode = e.currentTarget;
    const movieTit = targetNode.children[0].alt;
    alert(movieTit);
  });
});

const btns = carousel.querySelectorAll(".arr-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("left-btn")) {
      imageContainer.insertBefore(imageContainer.lastElementChild, imageContainer.firstElementChild);
    } else if (btn.classList.contains("right-btn")) {
      imageContainer.appendChild(imageContainer.firstElementChild);
    }
  });
});
