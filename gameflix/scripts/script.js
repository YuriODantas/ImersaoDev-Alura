let image = document.querySelector('#image');
let video = document.querySelector('#video');
let listBanner = document.querySelector('.wrapper-banner');
let newValue = 4;

function addNewGame() {
    if (image.value == "" || video.value == "") {
        alert("Preencha todos os campos.");
    } else {
        listBanner.innerHTML += `<a href=${video.value} target="_blank">
            <img class="main-banner" src=${image.value} alt="banner ${newValue}">
            </a>`;
        newValue++;
        video.value = "";
        image.value = "";
    }
}