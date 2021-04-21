const pokemons = [
    {
        name: 'pikachu',
        request: `<img class="pokemon" src="./images/pokemons/pikachu-locked.png" alt="Pokemon a ser descoberto">
        <div class="wrapper-button">
            <div class="main-button" onclick="response('pikachu')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Pikachu</p>
            </div>
            <div class="main-button" onclick="response('charmander')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Charmander</p>
            </div>
            <div class="main-button" onclick="response('blastoise')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Blastoise</p>
            </div>
        </div>`,
        rightAnswer: `<img class="pokemon" src="./images/pokemons/pikachu.png" alt="Pokemon descoberto">
        <h1>Você Acertou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`,
        wrongAnswer: `<img class="pokemon" src="./images/pokemons/pikachu.png" alt="Pokemon descoberto">
        <h1>Você Errou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`
    },
    {
        name: 'charmander',
        request: `<img class="pokemon" src="./images/pokemons/charmander-locked.png" alt="Pokemon a ser descoberto">
        <div class="wrapper-button">
            <div class="main-button" onclick="response('meowth')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Meowth</p>
            </div>
            <div class="main-button" onclick="response('zubat')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Zubat</p>
            </div>
            <div class="main-button" onclick="response('charmander')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Charmander</p>
            </div>
        </div>`,
        rightAnswer: `<img class="pokemon" src="./images/pokemons/charmander.png" alt="Pokemon descoberto">
        <h1>Você Acertou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`,
        wrongAnswer: `<img class="pokemon" src="./images/pokemons/charmander.png" alt="Pokemon descoberto">
        <h1>Você Errou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`
    },
    {
        name: 'bulbasaur',
        request: `<img class="pokemon" src="./images/pokemons/bulbasaur-locked.png" alt="Pokemon a ser descoberto">
        <div class="wrapper-button">
            <div class="main-button" onclick="response('pidgey')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Pidgey</p>
            </div>
            <div class="main-button" onclick="response('bulbasaur')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Bulbasaur</p>
            </div>
            <div class="main-button" onclick="response('clefairy')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Clefairy</p>
            </div>
        </div>`,
        rightAnswer: `<img class="pokemon" src="./images/pokemons/bulbasaur.png" alt="Pokemon descoberto">
        <h1>Você Acertou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`,
        wrongAnswer: `<img class="pokemon" src="./images/pokemons/bulbasaur.png" alt="Pokemon descoberto">
        <h1>Você Errou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`
    },
    {
        name: 'jigglypuff',
        request: `<img class="pokemon" src="./images/pokemons/jigglypuff-locked.png" alt="Pokemon a ser descoberto">
        <div class="wrapper-button">
            <div class="main-button" onclick="response('psyduck')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Psyduck</p>
            </div>
            <div class="main-button" onclick="response('jigglypuff')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Jigglypuff</p>
            </div>
            <div class="main-button" onclick="response('raichu')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Raichu</p>
            </div>
        </div>`,
        rightAnswer: `<img class="pokemon" src="./images/pokemons/jigglypuff.png" alt="Pokemon descoberto">
        <h1>Você Acertou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`,
        wrongAnswer: `<img class="pokemon" src="./images/pokemons/jigglypuff.png" alt="Pokemon descoberto">
        <h1>Você Errou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`
    },
    {
        name: 'squirtle',
        request: `<img class="pokemon" src="./images/pokemons/squirtle-locked.png" alt="Pokemon a ser descoberto">
        <div class="wrapper-button">
            <div class="main-button" onclick="response('onix')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Onix</p>
            </div>
            <div class="main-button" onclick="response('alakazam')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Alakazam</p>
            </div>
            <div class="main-button" onclick="response('squirtle')">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Squirtle</p>
            </div>
        </div>`,
        rightAnswer: `<img class="pokemon" src="./images/pokemons/squirtle.png" alt="Pokemon descoberto">
        <h1>Você Acertou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`,
        wrongAnswer: `<img class="pokemon" src="./images/pokemons/squirtle.png" alt="Pokemon descoberto">
        <h1>Você Errou!</h1>
            <div class="main-button" onclick="restart()">
                <img src="./images/favicon.png" alt="pokebola">
                <p>Recomeçar</p>
            </div>`
    },
];