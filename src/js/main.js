const getMovieData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Already-12-O-clock/ABCDmoviE/main/db/box_office_db.json"
  );
  const data = await res.json();

  const boxOfficeMovieInfoArr = [];

  data.items.map((item) => {
    const resultObj = {};
    resultObj["title"] = filterReg(item.title);
    resultObj["image"] = item.image;
    resultObj["date"] = item.pubDate;
    resultObj["actor"] = item.actor;
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

const $newItems = document.querySelector(".newItems");
const replaceImg = "https://unsplash-assets.imgix.net/empty-states/photos.png";

window.addEventListener("DOMContentLoaded", async () => {
  const boxOfficeMovieInfoArr = await getMovieData();
  const movieInfoArr = boxOfficeMovieInfoArr.slice(0, 8);

  movieInfoArr.forEach((resultObj, idx) => {
    const $newItemLi = document.createElement("li");

    $newItemLi.innerHTML = `
    <div class="newItem-wrap">
      <div class="img-wrap">
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
