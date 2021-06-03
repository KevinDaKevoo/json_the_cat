const request = require('request');
let breedName = process.argv[2];

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(URL, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Not Found! Error 404");
  }
});