let leftArrow = document.getElementById("leftCarouselArrow");
let rightArrow = document.getElementById("rightCarouselArrow");

let carousel = document.getElementById("carousel");
let panels = document.getElementsByClassName("carouselPannel");

let panelList = [...panels]
setTimeout(()=>{
    for(let panel of panelList){
        panel.classList.remove("smoothining");
    } 
},1)

leftArrow.addEventListener("click",carouselLeft);
rightArrow.addEventListener("click",carouselRight);

let inProg = false;

function carouselLeft(){
    if(inProg == false){
        panels = document.getElementsByClassName("carouselPannel");
        panelList[0].classList.remove("carouselPannelFirst");
        panelList.unshift(panelList.splice(3, 1)[0]);
        carousel.innerHTML = "";
        for(let panel of panelList){
            carousel.innerHTML += panel.outerHTML;
        }
        panelList = [...panels]
        
        panelList[0].classList.add("carouselPannelFirst");
        panelList[0].style.marginLeft= "-125%";
        inProg = true;
        setTimeout(()=>{
            panelList[0].style= "";
        },1)
        setTimeout(()=>{
            inProg = false
        },501)
    }
}

function carouselRight(){
    if(inProg == false){
        panels = document.getElementsByClassName("carouselPannel");
        
        panelList = [...panels]
        panelList[0].style.marginLeft= "-125%";
        inProg = true;
        setTimeout(()=>{
            inProg = false;
            panelList[0].style= "";
            panelList[0].classList.remove("carouselPannelFirst");
            panelList.push(panelList.splice(0, 1)[0]);
            panelList[0].classList.add("carouselPannelFirst");
            carousel.innerHTML = "";
            for(let panel of panelList){
                carousel.innerHTML += panel.outerHTML;
            }
           
        },500)
    }
}