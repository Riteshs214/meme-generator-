const btn = document.querySelector("button");
const memeTitle = document.querySelector(".title");
const memeImg = document.querySelector(".img");
const memeAuthor = document.querySelector(".author");

function getMemes() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, url, title } = data;
      memeAuthor.textContent =`Meme by : ${author}`;
      memeTitle.textContent = title;
      memeImg.src = url;
    });
}
getMemes();

btn.addEventListener("click", () => {
  getMemes();
});
