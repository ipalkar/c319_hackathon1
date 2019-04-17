class Dice{
    constructor(){
        this.array = [1,2,3,4,5];
        this.dice1=null;
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
    
    this.dice1=array[0];
    return this.dice1;
    
    }

    diceVal(){
        switch(this.dice1){
            case 1:
                this.diceClass=1;
            case 2:
                this.diceClass=2;
            case 3:
                this.diceClass=3;
            case 4:
                this.diceClass="heart";
            case 5:
                this.diceClass="attack";

        }
    }
   

}