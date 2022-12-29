const getMovieImage = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Already-12-O-clock/ABCDmoviE/main/db/box_office_db.json"
  );
  const data = await res.json();

  const boxOfficeMovieInfoArr = [];

  data.items.map((item) => {
    const resultObj = {};
    resultObj["title"] = filterReg(item.title);
    resultObj["image"] = item.image;
    boxOfficeMovieInfoArr.push(resultObj);
  });
  return boxOfficeMovieInfoArr;
};

function filterReg(title) {
  const regEx1 = /<b>/g;
  const regEx2 = /<\/b>/g;
  const filteredTit1 = title.replace(regEx1, "");
  const filteredTit2 = filteredTit1.replace(regEx2, "");
  return filteredTit2;
}

const carousel = document.querySelector(".main-carousel");
const imageContainer = carousel.querySelector(".item-list");
const imageLis = carousel.querySelectorAll(".item-list > li");

window.addEventListener("DOMContentLoaded", async () => {
  const boxOfficeMovieInfoArr = await getMovieImage();
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
      imageContainer.insertBefore(
        imageContainer.lastElementChild,
        imageContainer.firstElementChild
      );
    } else if (btn.classList.contains("right-btn")) {
      imageContainer.appendChild(imageContainer.firstElementChild);
    }
  });
});
