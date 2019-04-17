
class Dice{
    constructor(){
        this.array = [1,2,3,4,5];
        this.diceValue=null;
        this.diceClass=null;

    }

    shuffle(array){
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        this.diceValue=array[0];
        return this.diceValue;

    }

    diceVal(){
        switch(this.diceValue){
            case 1:
                this.diceClass=1;
                break;
            case 2:
                this.diceClass=2;
                break;
            case 3:
                this.diceClass=3;
                break;
            case 4:
                this.diceClass="heart";
                break;
            case 5:
                this.diceClass="attack";
        }
    }

    rollDice(){
        shuffle(this.array);
        diceVal();
    }



}

var dice1 = new Dice();