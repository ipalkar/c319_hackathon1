var diceArray = [1,2,3,4,5];
class Dice{
    constructor(){

        this.dice=null;
        this.diceDiv = $('<div></div>', {class: "dice"});
        this.diceImage = null;
        $('.diceBox').append(this.diceDiv);
        this.rollDice= this.rollDice.bind(this);

    }
    rollDice(){

        this.dice=Math.floor(Math.random() * 5) + 1;

        switch(this.dice){
            case 1:
                this.diceImage = 'url("images/dice1.png")';
                break;
            case 2:
                this.diceImage = 'url("images/dice2.png")';
                break;
            case 3:
                this.diceImage = 'url("images/dice3.png")';
                break;
            case 4:
                this.diceImage = 'url("images/dice4.png")';
                break;
            case 5:
                this.diceImage = 'url("images/dice5.png")';
                break;
        }
        $(this.diceDiv).css('background-image', this.diceImage);


    }

}