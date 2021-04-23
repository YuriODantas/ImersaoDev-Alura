alert("ATENÇÃO: se não configurar os points ele sera definido como 1 e ao definir os points a tabela irá zerar")

let players = [
    {
        name: "Yuri",
        victory: 0,
        draw: 0,
        loss: 0,
        points: 0
    },
]

let victoryPoints = 1

function changePoints() {
    let points = document.getElementById("points").value

    for (let i = 0; i < players.length; i++) {
        players[i].victory = 0
        players[i].draw = 0
        players[i].loss = 0
        players[i].points = 0
    }
    displayPlayersOnTheScreen(players)

    return victoryPoints = points
}

for (let i = 0; i < players.length; i++) {
    players[i].points = pointsCalc(players[i])
}

function pointsCalc(player) {
    var points = (player.victory * victoryPoints) + player.draw - player.loss
    return points
}

function addVictory(i) {
    var player = players[i]
    player.victory++
    player.points = pointsCalc(player)
    displayPlayersOnTheScreen(players)
}

function addDraw() {
    for (let i = 0; i < players.length; i++) {
        players[i].draw++
        players[i].points = pointsCalc(players[i])
    }
    displayPlayersOnTheScreen(players)
}

function addLoss(i) {
    var player = players[i]
    player.loss++
    players[i].points = pointsCalc(players[i])
    displayPlayersOnTheScreen(players)
}

function addNewPlayer() {
    let newPlayer = document.getElementById("player").value
    let player = {
        name: newPlayer,
        victory: 0,
        draw: 0,
        loss: 0,
        points: 0
    }

    players.push(player)
    document.getElementById("player").value = ''
    displayPlayersOnTheScreen(players)
}

displayPlayersOnTheScreen(players)
function displayPlayersOnTheScreen(players) {
    var html = ""
    for (var i = 0; i < players.length; i++) {
        html += "<tr class='table-item'>"
        html += "<td class='table-item'>" + players[i].name + "</td>"
        html += "<td class='table-item'>" + players[i].victory + "</td>"
        html += "<td class='table-item'>" + players[i].draw + "</td>"
        html += "<td class='table-item'>" + players[i].loss + "</td>"
        html += "<td class='table-item'>" + players[i].points + "</td>"
        html += "<td class='table-item -wrapper'>"
        html += "<button onclick='addVictory(" + i + ")' class='main-button -third -win'>Win</button>"
        html += "<button onclick='addDraw(" + i + ")' class='main-button -third -draw'>Draw</button>"
        html += "<button onclick='addLoss(" + i + ")' class='main-button -third -lose'>Lose</button>"
        html += "</td></tr>"
    }
    var tablePlayers = document.getElementById("table-players")
    tablePlayers.innerHTML = html
}