var diceArray = [1,2,3,4,5];
class Dice{
    constructor(diceSendCallback){
        this.diceSend = diceSendCallback;
        this.maxRoll = 3;
        this.currentRoll = 3;
        this.dice=null;
        this.domElements = [];
        this.selectedDice = [true, true, true, true, true];
        this.diceValues=[];
        this.diceImage = null;
        this.renderDice();

        this.rollDice= this.rollDice.bind(this);
        //this.useDice = this.useDice.bind( this);

        $('.rollButton').click(this.rollDice);
        //$('.acceptRoll').click(this.useDice);
        $('.dice').click(this.disableDice);
        this.toggleDice();

    }
    toggleDice(){
        var newIndex = null;
        //change selectedDice to true or false
        if(this.currentRoll<3 && $(this).hasClass('selected')){
            newIndex=this.domElements.indexOf(this);
            this.selectedDice[newIndex]=false;

        }

    }
    rollDice(){
        var diceValues = ['dice1.png','dice2.png','dice3.png','dice4.png', 'dice5.png'];
        this.diceValues = [];
        var diceWords = [1,2,3,'A','H'];
        for( var i = 0; i < 6; i++){
            //if the current die is true
            var randomIndex = Math.floor(diceValues.length * Math.random());
            var image = 'url(images/'+ diceValues[randomIndex]+')';
            this.domElements[i].css({
                'background-image': image
            });
            this.diceValues.push( diceWords[randomIndex]);
        }
        //console.log('dice roll was ', this.diceValues);
        this.currentRoll--;
        if(this.currentRoll===0){
            this.diceSend( this.diceValues );
        }

    }

    renderDice(){
        for( var i = 0; i < 6; i++){
            var dieDom = $("<div>",{
                    class: 'dice dice'+i,
                    css: {
                        'background-image': 'url("images/Q.png")'
                    }
                }
            );
            this.domElements.push(dieDom);
        }
        $('.diceBox').append(this.domElements);
    }

    disableDice(){
        $(this).css('border','5px solid yellow');
        $(this).addClass('selected');

    }

}