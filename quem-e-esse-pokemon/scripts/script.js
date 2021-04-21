let randomPokemon = Math.round(Math.random() * pokemons.length)
let music = new Audio('pokemon-music.mp3');

function start() {
    music.play();

    let html = document.querySelector('.main-section')
    html.innerHTML = pokemons[randomPokemon].request
}

function restart() {
    randomPokemon = Math.round(Math.random() * pokemons.length)

    let html = document.querySelector('.main-section')
    html.innerHTML = pokemons[randomPokemon].request
};

function response(item) {
    let html = document.querySelector('.main-section')
    if (item == pokemons[randomPokemon].name) {
        html.innerHTML = pokemons[randomPokemon].rightAnswer
    } else {
        html.innerHTML = pokemons[randomPokemon].wrongAnswer
    }
};

function stopMusic(){
    music.pause()
}