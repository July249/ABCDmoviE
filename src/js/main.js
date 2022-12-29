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
    resultObj["director"] = item.director;
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

getMovieImage();
