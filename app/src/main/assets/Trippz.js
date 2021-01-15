let hasDone = false;

var buttonArray = [];
const canvas = document.getElementById("gameCanvas");



let ctx;
ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
window.innerWidth= ctx.width;
window.innerHeight = ctx.height;
var upBUTTON = new button("./UpButton.png",0+150,500);
buttonArray.push(upBUTTON);

var dnBUTTON = new button("./UpButton.png",0+150,600);
buttonArray.push(dnBUTTON);
var lfBUTTON = new button("./UpButton.png",0+75,550);
buttonArray.push(lfBUTTON);
var rtBUTTON = new button("./UpButton.png",0+225,550);
buttonArray.push(rtBUTTON);
var ctrlStick2 = new AnalogStick(canvas.clientWidth-150,canvas.clientHeight-150);
var ctrlStick = new AnalogStick(0+100,canvas.clientHeight-150);

var hRatio = canvas.clientWidth / window.innerWidth;
var vRatio = canvas.clientHeight/ window.innerHeight;
var ratio = Math.min(hRatio,vRatio);


let BG = new gameObject(0,0,0,"./BGDIGI.png");

let player = new Player(canvas.clientWidth/2,canvas.clientHeight/2,false,"MGDcharacter.png");
let totalCount = 0;
let keys = {87:false,83:false,68:false, 65 :false};
let TCHES = {0 : false, 1 : false, 2 : false}
let touchObj = new gameObject(0,0,1,"./ControlStick.png");
let touches = 0;
let mButtons = {0:false, 2:false};
let mAxis = new Vector2(0,0);

let moveX = 0;
let moveY = 0;
let moving = 0;
let Axis = new Vector2(0,0);
//my shit..
let Camera = new camera(0,0,70);
var mouseObject = new gameObject(mAxis.x,mAxis.y ,1,"./UpButton.png");
mouseObject.sourceImage.width = 16;
mouseObject.sourceImage.height = 16;
let dXYpos = new Vector2( 0 ,0);
let dXYpos2 = new Vector2( 0 ,0);

let EnergyBalls = [];
EnergyBalls.length = 20;
for(let eb = 0; eb < EnergyBalls.length; eb++)
{
    EnergyBalls[eb] = new gameObject(100, 100,1,"./EnergyBall.png");
    //EnergyBalls[eb].Position = new Vector2(2,2);
    EnergyBalls[eb].spriteWidth = 480;
    EnergyBalls[eb].spriteHeight = 480;
    EnergyBalls[eb].sourceImage.width = 24;
    EnergyBalls[eb].sourceImage.height = 24;

    console.debug(EnergyBalls[eb]);
}

let enemies = [];

enemies.length = 20;
for(let p = 0; p < enemies.length; p++)
{
    if(p/3> 2)
    {
        enemies[p] =  new Enemey(0,0 ,false,"FragClust.png");
        enemies[p].Position = new Vector2(1+32*p,1+32*p );
    }else if(p/2 > 1)
    {
        enemies[p] =  new Enemey(0,0 ,false,"CorrupCell.png");
        enemies[p].Position = new Vector2(1+32*p,1+32*p );
    }else{
        enemies[p] =  new Enemey(0,0 ,false,"MemLeak.png");
        enemies[p].Position = new Vector2(1+32*p,1+32*p );
    }

}
let cellPlaceNumber = 0;
let time = 0;
let frameRateTimer =0.05;
let frameRateTimeMax = 0.05;
let date = new Date();
let elapsedTime = 0;

// random generation

//innit
//sets up all or stuff for game
Input();
gameLoop();


