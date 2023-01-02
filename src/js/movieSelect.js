import MovieData from "./getMovieData.js";

const fetchAPI = new MovieData();
const data = await fetchAPI.getMovieData();

const $selectMovieUl = document.querySelector(".select-ticket");
const replaceImg = "https://t1.daumcdn.net/movie/c171adb6eaa6dff8bb70a1d07e8431e893237c08";

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

    $selectMovieUl.appendChild($selectMovieLi);
  });

  selectTicket();
});

function selectTicket() {
  const $selectMovieLis = $selectMovieUl.querySelectorAll("li");
  const $selectMovieContainer = document.querySelector(".buy-ticket");
  const $selectMoviePoster = $selectMovieContainer.querySelector(".img-wrap");
  const $selectMovieTitle = $selectMovieContainer.querySelector(".seleted-movie-tit");

  $selectMovieLis.forEach((movie) => {
    movie.addEventListener("click", (e) => {
      const targetImg = e.currentTarget.children[0];
      const imgUrl = targetImg.getAttribute("src");
      const imgTitle = targetImg.getAttribute("alt");

      $selectMoviePoster.innerHTML = `
        <img src="${imgUrl}" alt="${imgTitle}" />
      `;

      $selectMovieTitle.textContent = imgTitle;
    });
  });
}
