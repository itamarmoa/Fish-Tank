/**
 * Created by Itamar on 4/12/2017.
 */
aqua.ui = {
    $btn_addfish: document.querySelector("#btn_addFish"),
    $btn_addcleaner : document.querySelector("#btn_addCleaner"),
    $btn_addfood : document.querySelector("#btn_addFood"),
    $stat_fishes : document.querySelector("#stat_fishes"),
    $meter_poop : document.querySelector("#meter_poop"),
    $meter_food : document.querySelector("#meter_food"),

    updateStats: function (fishes, food, poop){
        this.$stat_fishes.textContent = fishes;

        this.$meter_food.textContent = Math.floor(food) +"%";
        this.$meter_food.style.width = food+"%";

        this.$meter_poop.textContent = poop +"%";
        this.$meter_poop.style.width = poop +"%";
    }

};

aqua.ui.$btn_addfish.addEventListener("click", function(){
    aqua.createFish(1);
});

aqua.ui.$btn_addcleaner.addEventListener("click", function(){
    aqua.createFish(2);
});
aqua.ui.$btn_addfood.addEventListener("click", function(){
    aqua.tank.feed();
});
