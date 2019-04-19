

class GameKOT {
    constructor(numbPlayers) {
        this.playerArray = [];
        this.useDice = this.useDice.bind(this);
        this.dice = new Dice( this.useDice );
        this.playerinTokyo = 0;
        this.gameData = {
            currentPlayer: 0,
            numberOfPlayers: numbPlayers
        };
        $('.character-'+(this.gameData.currentPlayer+1)).addClass('borderHighlight');
        this.changePlayerInTokyo = this.changePlayerInTokyo.bind(this);
        this.nextPlayer = this.nextPlayer.bind(this);
        $('.leave').click(this.changePlayerInTokyo);
        $('.stay').click(this.stayInTokyo);
        $('.endTurn').click(this.nextPlayer);
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
        debugger;
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
        var playerInTokyo = this.playerArray[this.playerinTokyo];
        console.log(currentPlayer);
        if (currentPlayer.inTokyo === true){
            for (var i = 0; i < this.playerArray.length; i++){
                if (this.playerArray[i].inTokyo === false){
                    this.playerArray[i].healthDown(value);
                }

            }
        } else {
            playerInTokyo.healthDown(value);
            $('.leave').addClass('borderHighlight');
        }

        console.log(currentPlayer, value, 'deal damage');
    }
    healing(value){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        if (currentPlayer.inTokyo === false){
            currentPlayer.healthUp(value);
        }
        console.log(currentPlayer, value, 'increase hp');

    }
    increaseVP(amount){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        currentPlayer.victoryPointsUp(amount);
        if (currentPlayer.victoryPoints >= 20){
            alert('You are the King of Tokyo!');
        }
        console.log(currentPlayer, amount, 'vp');
    }
    nextPlayer(){
        $('.character-'+(this.gameData.currentPlayer+1)).removeClass('borderHighlight');
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        var playerInTokyo = this.playerArray[this.playerinTokyo];
        if (this.gameData.currentPlayer < 3){
            this.gameData.currentPlayer++;
        } else {
            this.gameData.currentPlayer = 0;
        }
        this.dice.currentRoll = 3;
        $('.character-'+(this.gameData.currentPlayer+1)).addClass('borderHighlight');
        if (playerInTokyo.timeInTokyo > 0){
            playerInTokyo.timeInTokyo = playerInTokyo.timeInTokyo + 1;
        }
        if (playerInTokyo.timeInTokyo === 5){
            this.increaseVP(2);
            alert('1 round completed and increased vp by 2');
        }
        for (var i = 0; i < this.playerArray.length; i++){
          this.playerArray[i].takenDamge = false;
        }
        $('.leave').removeClass('borderHighlight');
    }
    changePlayerInTokyo(){
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        var playerInTokyo = this.playerArray[this.playerinTokyo];

        if (playerInTokyo.takenDamge === true) {
            playerInTokyo.leaveTokyo();
            currentPlayer.goIntoTokyo();
        }
        $('.leave').removeClass('borderHighlight');
    }

}