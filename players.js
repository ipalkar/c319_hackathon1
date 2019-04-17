class Players {
    constructor(playerSpot, name) {
        this.playerSpot = playerSpot;
        this.name = name;
        this.health = 10;
        this.victoryPoints = 0;
        this.inTokyo = false;
    }

    healthUp(num) {
        if(this.health <= 12){
            this.health += num;
        }
        return this.health;
    }

    healthDown(num) {
        this.health -= num;
        return this.health;
    }

    victoryPointsUp(num) {
        this.victoryPoints += num;
        return this.victoryPoints;
    }

    goIntoTokyo() {
        this.inTokyo = true;
        this.victoryPointsUp(1);
        return this.inTokyo;
    }

    leaveTokyo() {
        this.inTokyo = false;
        return this.inTokyo;
    }

}

