const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catButton = document.getElementById("change-cat");

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return data.webpurl;
};

const loadImg = async () => {
  const catImage = document.getElementById("cat");
  catImage.src = await getCats();
};

catButton.addEventListener("click", loadImg);
loadImg();
