class MovieData {
  constructor() {}

  async getMovieData() {
    return fetch("https://raw.githubusercontent.com/Already-12-O-clock/ABCDmoviE/main/db/box_office_db.json").then(
      (res) => {
        if (res.statusCode === 404) {
          throw new Error("Not Found");
        } else if (res.ok) {
          return res.json();
        } else {
          throw new Error("Unexpected HTTP Status Code");
        }
      }
    );
  }

  filterTitleReg(title) {
    const regEx1 = /<b>/g;
    const regEx2 = /<\/b>/g;
    const filteredTit1 = title.replace(regEx1, "");
    const filteredTit2 = filteredTit1.replace(regEx2, "");
    return filteredTit2;
  }

  filterActorReg(actor) {
    const regEx = /\|/g;
    const filteredActor = actor.replace(regEx, ", ");
    return filteredActor;
  }
}

export default MovieData;
