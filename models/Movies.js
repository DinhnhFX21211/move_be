const fs = require("fs");
const path = require("path");

module.exports = class Movie {
  //readFile movieList.json
  static all() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "..", "data", "movieList.json"),
        "utf8"
      )
    );
  }
  //readFile genreList.json
  static genre() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "..", "data", "genreList.json"),
        "utf8"
      )
    );
  }
  //readFile videoList.json
  static video() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "..", "data", "videoList.json"),
        "utf8"
      )
    );
  }
  //readFile mediaTypeList.json
  static mediaType() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "..", "data", "mediaTypeList.json"),
        "utf8"
      )
    );
  }
};
