var joke = document.querySelector("#joke");
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    joke.innerHTML = data.value;
  });
