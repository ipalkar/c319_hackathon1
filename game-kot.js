

class GameKOT {
    constructor(numbPlayers) {
        this.playerArray = [];
        this.useDice = this.useDice.bind(this);
        this.dice = new Dice( this.useDice );
        this.playerinTokyoIndex = 0;
        this.gameData = {
            currentPlayer: 0,
            numberOfPlayers: numbPlayers
        };
        $('.character-'+(this.gameData.currentPlayer+1)).addClass('border-high-light');
        this.changePlayerInTokyo = this.changePlayerInTokyo.bind(this);
        this.nextPlayer = this.nextPlayer.bind(this);
        $('.leave').click(this.changePlayerInTokyo);
        $('.end-turn').click(this.nextPlayer);
    }

    useDice( diceArray){
            var count = {};
            for (var i = 0; i < diceArray.length; i++) {
                if (count[diceArray[i]] === undefined) {
                    count[diceArray[i]] = 1;
                } else {
                    count[diceArray[i]] += 1;
                }
            }
            this.readDice(count);
    }


    generateChars(){
        var player1 = new Players(1, 'Cyber Kitty');
        var player2 = new Players(2, 'Meca Dragon');
        var player3 = new Players(3, 'Alienoid');
        var player4 = new Players(4, 'Space Penguin');

        this.playerArray.push(player1);
        this.playerArray.push(player2);
        this.playerArray.push(player3);
        this.playerArray.push(player4);
        this.playerArray[0].goIntoTokyo();
    }
    readDice(value){
        var one = value['1'];
        var two = value['2'];
        var three = value['3'];
        var attack = value['A'];
        var health = value['H'];

        if (one === 6){
            this.increaseVP(4);
        } else if (one === 5){
            this.increaseVP(3);
        } else if (one === 4){
            this.increaseVP(2);
        } else if (one === 3){
            this.increaseVP(1);
        }
        if (two === 6){
            this.increaseVP(5);
        } else if (two === 5){
            this.increaseVP(4);
        } else if (two === 4){
            this.increaseVP(3);
        } else if (two === 3){
            this.increaseVP(2);
        }
        if (three === 6){
            this.increaseVP(6);
        } else if (three === 5){
            this.increaseVP(5);
        } else if (three === 4){
            this.increaseVP(4);
        } else if (three === 3){
            this.increaseVP(3);
        }

        if (attack > 0){
            this.dealDamage(attack);
        }
        if (health > 0){
            this.healing(health);
        }
    }
    dealDamage(value){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        var playerInTokyo = this.playerArray[this.playerinTokyoIndex];

        if (currentPlayer.inTokyo === true){
            for (var i = 0; i < this.playerArray.length; i++){
                if (this.playerArray[i].inTokyo === false){
                    this.playerArray[i].healthDown(value);
                }
            }
        } else {
            playerInTokyo.healthDown(value);
            $('.leave').addClass('border-high-light');
            $('.game-circle').addClass('shake-horizontal');
            setTimeout(function(){$('.game-circle').removeClass('shake-horizontal');}, 2000);
        }
    }
    healing(value){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        if (currentPlayer.inTokyo === false){
            currentPlayer.healthUp(value);
        }
    }
    increaseVP(amount){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        currentPlayer.victoryPointsUp(amount);
        if (currentPlayer.victoryPoints >= 5){
            $('.game-circle span').text(currentPlayer.name + ' Wins The game and');
        }
    }
    nextPlayer(){
        $('.character-'+(this.gameData.currentPlayer+1)).removeClass('border-high-light');
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        var playerInTokyo = this.playerArray[this.playerinTokyoIndex];
        if (this.gameData.currentPlayer < 3){
            this.gameData.currentPlayer++;
        } else {
            this.gameData.currentPlayer = 0;
        }
        this.dice.currentRoll = 3;
        $('.character-'+(this.gameData.currentPlayer+1)).addClass('border-high-light');
        if (playerInTokyo.timeInTokyo > 0){
            playerInTokyo.timeInTokyo = playerInTokyo.timeInTokyo + 1;
        }
        if (playerInTokyo.timeInTokyo === 5){
            this.increaseVP(2);
        }
        for (var i = 0; i < this.playerArray.length; i++){
          this.playerArray[i].takenDamge = false;
        }
        $('.leave').removeClass('border-high-light');
    }
    changePlayerInTokyo(){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        var playerInTokyo = this.playerArray[this.playerinTokyoIndex];

        if (playerInTokyo.takenDamge === true) {
            playerInTokyo.leaveTokyo();
            currentPlayer.goIntoTokyo();
            this.playerinTokyoIndex = this.playerArray.indexOf(currentPlayer);
        }
        $('.leave').removeClass('border-high-light');
    }

}