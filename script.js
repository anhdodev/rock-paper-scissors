function computerChoice() {
    var choice = Math.floor(Math.random() * 3);
    var pick;
    if (choice === 0) {
        pick = 'rock';
    } else if (choice === 1) {
        pick = 'paper';
    } else {
        pick = 'scissors';
    };
    return pick;
};

function comparePicks(player, computer) {
    if (player === computer) {
        return "tie";
    }
    if (player === "rock") {
        if (computer === "scissors") {
            return "player";
        } else {
            return "computer";
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            return "player";
        } else {
            return "computer";
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
};

$(document).ready(function () {
    var score = 0;
    $(".playBtn").click(function () {

        var playerPick = $(this).val();
        var computerPick = computerChoice();
        console.log("Player:" + playerPick);
        console.log("Computer:" + computerPick);
        if (comparePicks(playerPick, computerPick) === "player") {
            score += 1;
        } else if (comparePicks(playerPick, computerPick) === "tie") {
            score += 0;
        } else {
            score -= 1;
        }
        $("#score").text(score);
    })
});
