/**
 * Created by Itamar on 4/5/2017.
 */
aqua.Cleaner = function (id) {
    this.type = 2;
    this.id = id;
    this.height = 90;
    this.width = 80;
    this.positionX = getRandom(this.width, aqua.tank.width - this.width);
    this.positionY = getRandom(aqua.tank.positionY + (aqua.tank.height - this.height*2),aqua.tank.positionY + (aqua.tank.height - this.height));
    this.sizeRatio = 1;
    this.sizeLimit = 1.5;
    this.swimStep = getRandom(5, 30);
    this.eatStep = 0.03;
    this.foodLimit = 20;
    this.img = IMG_FOLDER + "cleaner2.gif";
    this.dir = -1;
    this.fishEl = {};

    this.init = function (tank){
        this.fishEl = document.createElement("div");
        this.fishEl.style.height = this.height+"px";
        this.fishEl.style.width = this.width+"px";
        this.fishEl.style.position = "absolute";
        this.fishEl.style.top = this.positionY + "px";
        this.fishEl.style.left = this.positionX + "px";
        this.fishEl.style.background = "url(" + this.img + ")";
        this.fishEl.style.backgroundSize = "contain";
        this.fishEl.style.backgroundRepeat = "no-repeat";
        this.fishEl.style.transition = "left 0.2s";
        this.fishEl.id = "fish-" + id;

        tank.appendChild(this.fishEl);
    };
    this.swim = function (fishEl){
        // Condition to keep the fish in tank
        if(this.positionX >= (aqua.tank.width - (this.width*1.2)) || this.positionX <= (this.width /2)) {
            this.dir = this.dir * -1;
        }
        // Changing position
        this.positionX += (this.dir * this.swimStep);

        // Update position
        this.fishEl.style.left = (this.positionX + "px");

        // Cleaning
        if(aqua.tank.poop >= 0){
            aqua.tank.poop -= getRandom(0, 4);
        }
    };

    this.eat = function (food){
        if (food > this.foodLimit){
            if(this.sizeRatio < this.sizeLimit){
                this.sizeRatio += this.eatStep;
            }
        }
        else{
            this.sizeRatio -= this.eatStep;
        }
        aqua.tank.food -= this.eatStep;
        this.resize(this);
    };
    this.resize = function () {
        if(this.sizeRatio >= 0.10){
            this.fishEl.style.transform = "scale("+ (this.dir * this.sizeRatio) +", "+ this.sizeRatio + ")";
        }
        else{
            this.die();
        }
    };
    this.die = function () {
        aqua.tank.fishes.splice(aqua.tank.fishes.indexOf(this),1);
        tank.removeChild(this.fishEl);
    };
}