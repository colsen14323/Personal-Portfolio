let leftArrow = document.getElementById("leftCarouselArrow");
let rightArrow = document.getElementById("rightCarouselArrow");

let carousel = document.getElementById("carousel");
let panels = document.getElementsByClassName("carouselPannel");

function carouselLeft(){

}

function carouselRight(){
    for(panel of panels){
        panel.cla
    }
    panels.push(panels.splice(0, 1)[0]);
}