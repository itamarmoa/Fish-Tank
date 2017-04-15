/**
 * Created by Itamar on 3/29/2017.
 */
// Global Configuration
var IMG_FOLDER = "images/";
var $container = document.querySelector("#tank_container");


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Initialize Aquarium
aqua.init();
