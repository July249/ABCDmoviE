import MovieData from "./getMovieData.js";

const fetchAPI = new MovieData();
const data = await fetchAPI.getMovieData();

const $newItems = document.querySelector(".newItems");
const replaceImg = "https://unsplash-assets.imgix.net/empty-states/photos.png";

window.addEventListener("load", async () => {
  const boxOfficeMovieInfoArr = [];

  data.items.map((item) => {
    const resultObj = {};
    resultObj["title"] = fetchAPI.filterTitleReg(item.title);
    resultObj["image"] = item.image;
    resultObj["date"] = item.pubDate;
    resultObj["actor"] = fetchAPI.filterActorReg(item.actor);
    boxOfficeMovieInfoArr.push(resultObj);
  });

  const movieInfoArr = boxOfficeMovieInfoArr.slice(0, 8);

  movieInfoArr.forEach((resultObj, idx) => {
    const $newItemLi = document.createElement("li");

    $newItemLi.innerHTML = `
    <div class="newItem-wrap">
      <div class="poster-wrap">
        <img class="newItem-img" src=${resultObj.image || replaceImg} />
      </div>
      <p class="newItem-name">${resultObj.title}</p>
      <div class="desc-wrap">
        <dl class="open-wrap">
          <dt class="type-b">개봉</dt>
          <dd class="date">${resultObj.date}</dd>
        </dl>
        <dl class="actor-wrap">
          <dt class="type-c">출연</dt>
          <dd class="actor">${resultObj.actor}</dd>
        </dl>
      </div>
    </div>
    <div class="fast-ticket"><a href="#빠른예매페이지">예매하기</a></div>
    `;

    $newItems.appendChild($newItemLi);
  });
});
