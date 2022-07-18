const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const dogBtn = document.getElementById("change-dog");
const dogImg = document.getElementById("dog");

const getDogs = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.message;
};

const loadImg = async () => {
    dogImg.src = await getDogs();
};

dogBtn.addEventListener("click", loadImg);

loadImg();
