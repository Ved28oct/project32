const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var time;
var am;

var bg ;

function preload(){ 

 getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){
        background(backgroundImg)
            }

    textSize(30)
    text("time : "+time+ " " + am,50,30)

    Engine.update(engine);

    // write code to display time in correct format here


    




}

async function getBackgroundImg(){

var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responceJSON = await responce.json();
var datetime = responceJSON.datetime

var hour = datetime.slice(11,13);
time = hour%12

if(hour>=00 && hour<=12){
    am = "am"
}else{
    am = "pm"
}

console.log(hour);

if(hour>=04 && hour<=06){
    bg = "sunrise1.png"

}else if(hour>=06 && hour<=08){
    bg = "sunrise2.png"
}else if(hour>=08 && hour<=11){
    bg = "sunrise3.png"
}else if(hour>=12 && hour<=14){
    bg = "sunrise4.png"
}else if(hour>=15 && hour<=18){
    bg = "sunrise5.png"
}else if(hour>=19 && hour==00){
    bg = "sunset12.png"
}else{
   bg= "sunset8.png"     
}



backgroundImg = loadImage(bg);

    
}