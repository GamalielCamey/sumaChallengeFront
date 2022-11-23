const {Router} = require("express");
const axios = require("axios");
const router = Router();

// router and SWAPI requests

// const characterDetail = async () =>{
//   const result =
// }

const charactersApi = async () => {
  let urls = [];

  const apiUrl = `https://swapi.dev/api/people/?page=`;

  for (let i = 1; i < 10; i++) {
    urls.push(apiUrl + i);
  }

  const fetchData = (url) => {
    return axios.get(url).then((result) => {
      return result.data.results;
    });
  };

  const getAllData = (urls) => {
    return Promise.all(urls.map(fetchData));
  };

  let allCharacters = getAllData(urls).then((resp) => resp);
  return allCharacters;
};

router.get("/", async (req, res) => {
  let characters = await charactersApi();
  let char = characters.flat();
  return res.status(200).send(char);
});

router.post("/detail", async (req, res) => {
  const {url} = req.body;
  const result = await axios.get(url);
  return res.status(200).send(result.data);
});

module.exports = router;
