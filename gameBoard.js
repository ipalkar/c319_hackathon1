

class GameKOT {
    constructor(numbPlayers) {
        this.playerArray = [];

        this.gameData = {
            currentPlayer: 0,
            numberOfPlayers: numbPlayers,
            playerInTokyo: 1,
            playersNotInTokyo: [],
            currentDiceValue: [],
            rollNumber: 1,
            diceArray: []

        }
    }
    generateDice(){

        this.gameData.diceArray = [];
        for (var i = 0; i < 6; i++){
            var dice = new Dice();
            dice.rollDice();

            this.gameData.diceArray.push(dice);
        }

        //die.rollDice(this.gameData.diceArray);
    }
    reRollDice(){

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
    }
    readDice(){
        //this.gameData.diceArray

        // switch(this.dice){
        //     case 1:
        //         $(this).css('background-image','dice1.png');
        //         break;
        //     case 2:
        //         $(this).css('background-image','dice1.png');
        //         break;
        //     case 3:
        //         $(this).css('background-image','dice1.png')
        //         break;
        //     case 4:
        //         $(this).css('background-image','dice1.png')
        //         break;
        //     case 5:
        //         $(this).css('background-image','dice1.png')
        //         break;
        //
        // }
        for (var diceIndex = 0; diceIndex < this.gameData.diceArray.length; diceIndex++){
            // die.diceVal(this.gameData.diceArray[diceIndex]);
            var diceValue = this.gameData.diceArray[diceIndex];
            var currentPlayer = this.gameData.currentPlayer;
            //if (currentPlayer.inTokyo === )
        }
    }
    checkInTokyo(player, dicevalue) {
        var result = this.player.inTokyoCheck();
        if (result === true){
            dealDamage(this.gameData.playersNotInTokyo, dicevalue);
        }else {
            dealDamage(this.gameData.playerInTokyo, dicevalue);
        }

        // var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        // if (currentPlayer.inTokyo === false) {
        //     //They can attack players in tokyo
        //     //
        // }
    }
    dealDamage(array, dieValue){
        for (var damArrIndex = 0; damArrIndex < array.length; damArrIndex++){
            changeHp(array[damArrIndex])
        }
    }
    changehp(healthNum, tokyoCheck){

    }
    changevp(){

    }

}