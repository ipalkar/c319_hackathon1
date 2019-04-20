class Players {
    constructor(playerSpot, name) {
        this.playerSpot = playerSpot;
        this.name = name;
        this.health = 10;
        this.victoryPoints = 0;
        this.inTokyo = false;
        this.takenDamge = false;
        this.timeInTokyo = 0;
    }

    healthUp(num) {
        this.health = this.health + num;
        if (this.health > 10){
            this.health = 10;
            var test = this.playerSpot;
            $('.character-' + test).addClass('heartbeat');
            setTimeout(function(){ $('.character-' + test).removeClass('heartbeat'); }, 2000);
        }
        this.renderPoints('hp');
        return this.health;
    }

    healthDown(num) {

        this.health = this.health - num;
        this.renderPoints('hp');
        this.takenDamge = true;
        var test = this.playerSpot;
        $('.character-' + test).addClass('shake-horizontal');
        setTimeout(function(){ $('.character-' + test).removeClass('shake-horizontal'); }, 2000);
        return this.health;
    }

    victoryPointsUp(num) {
        this.victoryPoints = this.victoryPoints + num;
        this.renderPoints('vp');
        return this.victoryPoints;
    }

    goIntoTokyo() {
        this.inTokyo = true;
        this.victoryPointsUp(1);
        this.renderCenterImage();
        this.timeInTokyo = 1;
        return this.inTokyo;
    }

    leaveTokyo() {
        this.inTokyo = false;
        this.timeInTokyo = 0;
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
        $('.game-circle').css('background-image', imageValue);
        $('.game-circle span').text(this.name);

    }
}