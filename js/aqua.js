/**
 * Created by Itamar on 4/5/2017.
 */
var aqua = {
    fps: 200,
    isInit: false,
    fishCounter: 0,
    init: function(){
        //This should be a public function
        if(this.isInit !== true){
            console.log("Creating tank...");
            this.createTank();
            this.isInit = true;
        }
    },
    createTank: function(){
        //This should be a private function
        this.tank = new this.Tank($container);
        this.tank.init();
    },

    createFish: function(fishType){
        //This should be a public function
        switch (fishType){
            case 1:
                var fish = new this.Fish(aqua.fishCounter);
                break;
            case 2:
                var fish = new this.Cleaner(aqua.fishCounter);
                break;
        }
        this.tank.addFish(fish);
        console.log("Fish ID:",fish.id, "created");

        aqua.fishCounter ++;
    },
}
