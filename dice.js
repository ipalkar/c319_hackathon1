class Dice{
    constructor(diceSendCallback){
        this.diceSend = diceSendCallback;
        this.currentRoll = 3;
        this.domElements = [];
        this.selectedDice = [true, true, true, true, true,true];
        this.diceValues=[];
        this.renderDice();

        this.rollDice= this.rollDice.bind(this);
        this.disableDice = this.disableDice.bind(this);


        $('.rollButton').click(this.rollDice);

        $('.dice').click(this.disableDice);


        $('.endTurn').click(this.resetDice);

    }

    rollDice(){
        debugger;
        var diceValues = ['dice1.png','dice2.png','dice3.png','dice4.png', 'dice5.png'];
        this.diceValues = [];
        var diceWords = [1,2,3,'A','H'];


        for( var i = 0; i < 6; i++){
            if(!this.selectedDice[i]){
                continue;
            }

            var randomIndex = Math.floor(diceValues.length * Math.random());
            var image = 'url(images/'+ diceValues[randomIndex]+')';
            $(this.domElements[i].css({
                'background-image': image
            }))
            this.diceValues.push( diceWords[randomIndex]);
        }

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
                    },
                    'data-index': i
                }
            );
            this.domElements.push(dieDom);
        }
        $('.diceBox').append(this.domElements);
    }

    disableDice(event) {
        debugger;
        var currentIndex = parseInt($(event.currentTarget).attr('data-index'));
        this.selectedDice[ currentIndex ] = !this.selectedDice[ currentIndex ]
        $(event.currentTarget).toggleClass('selectedDie')
    }

    resetDice(){
        this.selectedDice = [true,true,true,true,true,true];
        $('.dice').css('background-image', 'url("images/Q.png")');
    }

}