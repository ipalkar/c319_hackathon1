

class GameKOT {
    constructor(numbPlayers) {
        this.playerArray = [];

        this.gameData = {
            currentPlayer: 0,
            numberOfPlayers: numbPlayers,
            playerInTokyo: 1,
            // playersNotInTokyo: [],
            currentDiceValue: [],
            rollNumber: 1,
            diceArray: [],

        }
    }
    generateDice(){
        this.gameData.diceArray = [];
        var die = new Dice();
        this.gameData.diceArray.push(die);
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
        // for (var diceIndex = 0; diceIndex < this.gameData.diceArray.length; diceIndex++){
        //     die.diceVal(this.gameData.diceArray[diceIndex]);
        // }
    }
    checkInTokyo() {
        var currentPlayer = this.playerArray[this.gameData.currentPlayer];
        if (currentPlayer.inTokyo === false) {
            //They can attack players in tokyo
            //
        }
    }
    dealDamage(){

    }
    changehp(){

    }
    changevp(){

    }

}