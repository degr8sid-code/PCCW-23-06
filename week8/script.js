document.addEventListener("DOMContentLoaded", () => {
    const fetchDogs = async () => {
        const dogs = await fetch("https://random.dog/woof.json");
        const dogsJson = await dogs.json();
        console.log(dogsJson);
        showImages(dogsJson.url);
    };

    const showImages = (imgUrl) => {
        const container = document.getElementById("container");
        const image = document.createElement("img");
        image.src = imgUrl;
        image.classList.add("image");
        container.appendChild(image);
    };

    fetchDogs();
})