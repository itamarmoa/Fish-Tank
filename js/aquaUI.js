/**
 * Created by Itamar on 4/12/2017.
 */
aqua.ui = {
    $btn_addfish: document.querySelector("#btn_addFish"),
    $btn_addcleaner : document.querySelector("#btn_addCleaner"),
    $btn_addfood : document.querySelector("#btn_addFood"),
    $stat_fishes : document.querySelector("#stat_fishes"),
    $stat_cleaners : document.querySelector("#stat_cleaners"),
    $stat_food : document.querySelector("#stat_food"),
    $meter_poop : document.querySelector("#meter_poop"),
    $meter_food : document.querySelector("#meter_food"),

    updateStats: function (fishes, cleaners, food, poop){
        this.$stat_fishes.textContent = fishes;

        this.$meter_food.textContent = Math.floor(food / 10) +"%";
        this.$meter_food.style.width = (food / 10)+"%";

        this.$meter_poop.textContent = (poop / 10)+"%";
        this.$meter_poop.style.width = (poop / 10)+"%";
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
