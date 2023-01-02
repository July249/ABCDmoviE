import MovieData from "./getMovieData.js";

const fetchAPI = new MovieData();
const data = await fetchAPI.getMovieData();

const $selectMovieUl = document.querySelector(".select-ticket");
const replaceImg = "https://unsplash-assets.imgix.net/empty-states/photos.png";

window.addEventListener("load", async () => {
  const boxOfficeMovieInfoArr = [];

  data.items.map((item) => {
    const resultObj = {};
    resultObj["title"] = fetchAPI.filterTitleReg(item.title);
    resultObj["image"] = item.image;
    boxOfficeMovieInfoArr.push(resultObj);
  });

  const movieInfoArr = boxOfficeMovieInfoArr.slice(0, 9);

  movieInfoArr.forEach((resultObj, idx) => {
    const $selectMovieLi = document.createElement("li");

    $selectMovieLi.innerHTML = `
      <img src=${resultObj.image || replaceImg} alt="${resultObj.title}" />
    `;

    console.log($selectMovieLi);
    $selectMovieUl.appendChild($selectMovieLi);
  });
});
