class Dice{
    constructor(diceSendCallback){
        this.diceSend = diceSendCallback;
        this.currentRoll = 3;
        this.domElements = [];
        this.selectedDice = [true, true, true, true, true,true];
        this.diceValues=[];
        this.cantBeSelected = true;
        this.renderDice();

        this.rollDice= this.rollDice.bind(this);
        this.disableDice = this.disableDice.bind(this);
        this.sendValues = this.sendValues.bind(this);
        this.resetDice = this.resetDice.bind(this);

        $('.roll-button').click(this.rollDice);

        $('.dice').click(this.disableDice);

        $('.end-turn').click(this.resetDice);



    }

    rollDice(){
        $('.accept-roll').off('click', this.sendValues);
        if (this.currentRoll < 3 || this.currentRoll > 0){
            this.cantBeSelected = false;
        }
        var diceValues = ['dice1.png','dice2.png','dice3.png','dice4.png', 'dice5.png'];

        var diceWords = [1,2,3,'A','H'];


        for( var i = 0; i < 6; i++){
            if(this.selectedDice[i]){
                var randomIndex = Math.floor(diceValues.length * Math.random());
                var image = 'url(images/'+ diceValues[randomIndex]+')';
                $(this.domElements[i].css({
                    'background-image': image
                }));
                this.diceValues[i]= diceWords[randomIndex];
            }



        }

        this.currentRoll--;
        $('.rolls-remaining').empty().append(this.currentRoll);
        if(!this.currentRoll){
            document.getElementsByClassName('roll-button')[0].disabled=true;
            $('.roll-button').addClass('selected-die');
            this.cantBeSelected = true;
            $('.end-turn').addClass('border-high-light');
        }
        $('.accept-roll').one('click', this.sendValues);
    }

    sendValues(){
        this.diceSend(this.diceValues);

    }

    renderDice(){
        for( var i = 0; i < 6; i++){
            var dieDom = $("<div>",{
                    class: 'dice dice'+i,
                    css: {
                        'background-image': 'url("images/dice6.png")'
                    },
                    'data-index': i
                }
            );
            this.domElements.push(dieDom);
        }
        $('.dice-box').append(this.domElements);
    }

    disableDice(event) {
        if (this.cantBeSelected) {
            return;
        }
        var currentIndex = parseInt($(event.currentTarget).attr('data-index'));
        this.selectedDice[ currentIndex ] = !this.selectedDice[ currentIndex ];
        $(event.currentTarget).toggleClass('selected-die');

    }

    resetDice(){
        this.selectedDice = [true,true,true,true,true,true];
        $('.dice').css('background-image', 'url("images/dice6.png")');
        $('.dice').removeClass('selected-die');
        this.cantBeSelected = true;
        document.getElementsByClassName('roll-button')[0].disabled=false;
        $('.rolls-remaining').empty().append(3);
        $('.roll-button').removeClass('selected-die');
        $('.end-turn').removeClass('border-high-light');


    }

}