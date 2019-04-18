class Players {
    constructor(playerSpot, name) {
        this.playerSpot = playerSpot;
        this.name = name;
        this.health = 10;
        this.victoryPoints = 0;
        this.inTokyo = false;
        this.takenDamge = false;
    }

    healthUp(num) {

        this.health = this.health + num;
        if (this.health > 10){
            this.health = 10;
        }
        this.renderPoints('hp');
        return this.health;
        //console.log(num, 'health HIt');
        // if(this.inTokyo = false){
        //     if(this.health < 100){
        //         this.health = this.health + num;
        //         return this.health;
        //     } else {
        //         this.health = this.health + num;
        //         return this.health;
        //         //console.log('you cannot heal in tokyo');
        //     }
        // }
        // return this.health;
    }

    healthDown(num) {
        this.health = this.health - num;
        this.renderPoints('hp');
        this.takenDamge = true;
        return this.health;
    }

    victoryPointsUp(num) {
        this.victoryPoints += num;
        this.renderPoints('vp');
        return this.victoryPoints;
    }

    goIntoTokyo() {
        this.inTokyo = true;
        this.victoryPointsUp(1);
        this.renderCenterImage();
        return this.inTokyo;
    }

    leaveTokyo() {
        this.inTokyo = false;
        return this.inTokyo;
    }
    renderPoints(type) {
        var selector = `.${type}${this.playerSpot}`;
        var selectorType;
        if(type === 'hp'){
            selectorType = this.health;
        } else {
            selectorType = this.victoryPoints;
        }
        $(selector).text(selectorType);
    }
    renderCenterImage(){
        var imageValue = 'url(images/char' + this.playerSpot + '.png';
        $('.gameCircle').css('background-image', imageValue);
        $('.gameCircle span').text(this.name);

    }
}

