var playerPoints = 0
var cpuPoints = 0
var createModal = document.getElementById('modal')

function showCard(cardSeletor) {
    let showCard = document.getElementById('main-game')
    if (cardSeletor == "player") {
        showCard.innerHTML = `<button id="draw-button" class="main-button" onclick="randomCard()">Puxar carta do deck:${cards.length}</button>
        <div class="wrapper-section">
            <div class="-players">
                <p class="title">Yugi:${playerPoints}</p>
                <img src="./images/yugi.png" alt="Personagem Yugi">
            </div>
            <div class="-card">
                <img class="main-card" src="${cardPlayer.image}" alt="Carta virada para cima do Yugi">
                <div>
                    <button id="attack-button" class="main-button -second" onclick="attack()" disabled=true>⚔ ATK</button>
                    <button id="defense-button" class="main-button -second" onclick="defense()" disabled=true>🛡 DEF</button>
                </div>
            </div>
            <div>
                <img class="main-card" src="./images/cards/card-back.jpg" alt="Carta virada para baixo do Kaiba">
            </div>
            <div class="-players">
                <p class="title">Kaiba:${cpuPoints}</p>
                <img src="./images/kaiba.png" alt="Personagem Kaiba">
            </div>
        </div>`
    } else if (cardSeletor == "cpu") {
        showCard.innerHTML = `<button id="draw-button" class="main-button" onclick="randomCard()">Puxar carta do deck:${cards.length}</button>
        <div class="wrapper-section">
            <div class="-players">
                <p class="title">Yugi:${playerPoints}</p>
                <img src="./images/yugi.png" alt="Personagem Yugi">
            </div>
            <div class="-card">
                <img class="main-card" src="${cardPlayer.image}" alt="Carta virada para cima do Yugi">
                <div>
                    <button id="attack-button" class="main-button -second" onclick="attack()" disabled=true>⚔ ATK</button>
                    <button id="defense-button" class="main-button -second" onclick="defense()" disabled=true>🛡 DEF</button>
                </div>
            </div>
            <div>
                <img class="main-card" src="${cardCpu.image}" alt="Carta virada para cima do Kaiba">
            </div>
            <div class="-players">
                <p class="title">Kaiba:${cpuPoints}</p>
                <img src="./images/kaiba.png" alt="Personagem Kaiba">
            </div>
        </div>`
    } else if (cardSeletor == "initial") {
        showCard.innerHTML = `<button id="draw-button" class="main-button" onclick="randomCard()">Puxar carta do deck: ${cards.length}</button>
        <div class="wrapper-section">
            <div class="-players">
                <p class="title">Yugi:${playerPoints}</p>
                <img src="./images/yugi.png" alt="Personagem Yugi">
            </div>
            <div class="-card">
                <img class="main-card" src="./images/cards/card-back.jpg" alt="Carta virada para baixo do Yugi">
                <div>
                    <button id="attack-button" class="main-button -second" onclick="attack()" disabled=true>⚔ ATK</button>
                    <button id="defense-button" class="main-button -second" onclick="defense()" disabled=true>🛡 DEF</button>
                </div>
            </div>
            <div>
                <img class="main-card" src="./images/cards/card-back.jpg" alt="Carta virada para baixo do Kaiba">
            </div>
            <div class="-players">
                <p class="title">Kaiba:${cpuPoints}</p>
                <img src="./images/kaiba.png" alt="Personagem Kaiba">
            </div>
        </div>`
    }
}

function randomCard() {
    var numberCardCpu = parseInt(Math.random() * cards.length)
    cardCpu = cards[numberCardCpu]
    cards.splice(numberCardCpu, 1)

    var numberCardPlayer = parseInt(Math.random() * cards.length)
    cardPlayer = cards[numberCardPlayer]
    cards.splice(numberCardPlayer, 1)

    showCard("player")

    if (cardPlayer.name == "Buraco Negro") {
        createModal.innerHTML = `<p>You Win <br>🏆<p>
            <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
        playerPoints++
        showCard("cpu")
        startModal(true)
    } else if (cardCpu.name == "Buraco Negro") {
        createModal.innerHTML = `<p>You Lose <br>❌</p>
            <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
        cpuPoints++
        showCard("cpu")
        startModal(true)
    } else {
        document.getElementById('draw-button').disabled = true
        document.getElementById('attack-button').disabled = false
        document.getElementById('defense-button').disabled = false
    }
}

function attack() {
    showCard("cpu")

    var playerAttack = cardPlayer.attributes
    var cpuAttack = cardCpu.attributes

    if (cards.length == 0) {
        finalResult()
    } else {
        if (playerAttack.attack > cpuAttack.attack) {
            createModal.innerHTML = `<p>You Win <br>🏆<p>
            <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
            playerPoints++
        } else if (playerAttack.attack < cpuAttack.attack) {
            createModal.innerHTML = `<p>You Lose <br>❌</p>
            <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
            cpuPoints++
        } else {
            createModal.innerHTML = `<p>DRAW <br>⚔</p>
            <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
        }
        startModal(true)
    }
}

function defense() {
    showCard("cpu")

    var playerDefense = cardPlayer.attributes
    var cpuDefense = cardCpu.attributes

    if (cards.length == 0) {
        finalResult()
    } else {

        if (playerDefense.defense > cpuDefense.defense) {
            createModal.innerHTML = `<p>You Win <br>🏆<p>
          <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
            playerPoints++
        } else if (playerDefense.defense < cpuDefense.defense) {
            createModal.innerHTML = `<p>You Lose <br>❌</p>
           <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
            cpuPoints++
        } else {
            createModal.innerHTML = `<p>DRAW <br>⚔</p>
           <button id="restart-button" class="main-button" onclick='restart()'>Próxima Rodada</button>`
        }
        startModal(true)
    }
}

function restart() {
    document.getElementById('draw-button').disabled = false
    document.getElementById('draw-button').hidden = false
    document.getElementById('restart-button').hidden = true
    startModal(false)

    showCard("initial")
}

function startModal(start) {
    var modal = document.getElementById('modal-game')
    if (start) {
        modal.classList.add('show')
    } else {
        modal.classList.remove('show')
    }
}

function finalResult(){
    var container = document.getElementById('main-game')
    if (playerPoints > cpuPoints) {
        container.innerHTML = `<img src="./images/yugi.png" alt="Personagem Yugi">
        <p class="winner">🏆<br>Você venceu o Duelo<p>`
    } else if (playerPoints < cpuPoints) {
        container.innerHTML = `<img src="./images/kaiba.png" alt="Personagem Kaiba">
        <p class="winner">🏆<br>Kaiba venceu o Duelo</p>`
    } else {
        container.innerHTML = `<img src="./images/yugi.png" alt="Personagem Yugi">
        <img src="./images/kaiba.png" alt="Personagem Kaiba">
        <p class="winner">⚔<br>Houve um Empate</p>`
    }
}