/**
 * Created by Itamar on 4/5/2017.
 */
aqua.Tank = function ($container){

    this.width = 900;
    this.height = 700;
    this.positionX = 5;
    this.positionY = 5;
    this.tankEl = {};
    this.tankMSK = {};

    // Status elements
    this.fishes = [];
    this.poop = 0;
    this.food = 0;

    this.init = function(){
        // Creating Tank Element
        this.tankEl = document.createElement("div");
        this.tankEl.style.width = this.width + "px";
        this.tankEl.style.height = this.height + "px";
        this.tankEl.style.top = this.positionY;
        this.tankEl.style.left = this.positionX;
        this.tankEl.id = "tank";

        $container.appendChild(this.tankEl);

        // Creating 2nd layer for poop indication
        this.tankMSK = document.createElement("div");
        this.tankMSK.style.width = this.width + "px";
        this.tankMSK.style.height = this.height + "px";
        this.tankMSK.style.position = "absolute";
        this.tankMSK.style.top = this.tankEl.offsetTop+"px";
        this.tankMSK.style.left = this.tankEl.offsetLeft+"px";
        this.tankMSK.id = "tank-mask";
        this.tankMSK.style.opacity = 0.0;

        $container.appendChild(this.tankMSK);

        // Turn updater
        setInterval(function(){
            for (var fish of aqua.tank.fishes){
                fish.swim();
                fish.eat(aqua.tank.food);
            }
            aqua.ui.updateStats(aqua.tank.fishes.length, aqua.tank.food, aqua.tank.poop);
        }, aqua.fps);

        // 2nd Updater for the Poop layer (performance fix)
        setInterval(function(){
            aqua.tank.updatePoop();
        }, 2000);
    };

    this.addFish = function(fish){
        this.positionY = tank.offsetTop;
        this.fishes.push(fish);
        fish.init(this.tankEl);
        console.log("Init Fish", fish.id);
    };
    this.updatePoop = function(){
        this.tankMSK.style.opacity = (this.poop / 1000);
    };
    this.feed = function(){
        this.food += 10;
    };
}