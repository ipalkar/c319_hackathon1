var diceArray = [1,2,3,4,5];
class Dice{
    constructor(diceSendCallback){
        this.diceSend = diceSendCallback
        this.maxRoll = 3;
        this.currentRoll = 3;
        this.dice=null;
        this.domElements = [];
        this.selectedDice = [true, true, true, true, true]
        this.diceValues=[ ];
        this.diceImage = null;
        this.renderDice();

        this.rollDice= this.rollDice.bind(this);
        //this.useDice = this.useDice.bind( this);

        $('.rollButton').click(this.rollDice);
        //$('.acceptRoll').click(this.useDice);

    }
    toggleDice(){
        //change selectedDice to true or false
    }
    rollDice(){
        var diceValues = ['dice1.png','dice2.png','dice3.png','dice4.png', 'dice5.png'];
        this.diceValues = [];
        var diceWords = [1,2,3,'P','H'];
        for( var i = 0; i < 5; i++){
            //if the current die is true
            var randomIndex = Math.floor(diceValues.length * Math.random());
            var image = 'url(images/'+ diceValues[randomIndex]+')';
            this.domElements[i].css({
                'background-image': image
            })
            this.diceValues.push( diceWords[randomIndex]);
        }
        console.log('dice roll was ', this.diceValues);
        this.currentRoll--;
        if(this.currentRoll===0){
            this.diceSend( this.diceValues );
        }

    }
    oldrollDice(){

        this.dice=Math.floor(Math.random() * 5) + 1;
        var randomIndex = Math.floor(diceValues.length * Math.random());

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
        this.currentRoll--;
        if(this.currentRoll===0){
            this.gameAcceptDice()
        }


    }
    renderDice(){
        for( var i = 0; i < 5; i++){
            var dieDom = $("<div>",{
                class: 'dice',
                css: {
                    'background-image': 'url("images/Q.png")'
                }
            }
            );
            this.domElements.push(dieDom);
        }
        $('.diceBox').append(this.domElements);
    }

}