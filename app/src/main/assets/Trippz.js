let hasDone = false;

var buttonArray = [];
const canvas = document.getElementById("gameCanvas");
const _Audio = document.getElementById("SFX");
const _AudioTheme = document.getElementById("THEME");

let THEME_Main= new Audio("./Theme.mp3");
THEME_Main.volume = 0.33;
THEME_Main.autoplay = true;




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
var ctrlStick = new AnalogStick(0+150,canvas.clientHeight-150);

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
let FiredEBList = [];
EnergyBalls.length = 1000;
let Terminal = new gameObject(0,0,0,"./Terminal.png");
Terminal.sourceImage.width= 64;
Terminal.sourceImage.height = 64;
Terminal.spriteWidth= 128;
Terminal.spriteHeight = 128;
let TerminalHP = new gameObject(canvas.offsetHeight/2,canvas.getBoundingClientRect().bottom-canvas.offsetHeight/7,0,"./TerminalHP.png")
TerminalHP.sourceImage.width = 100;
TerminalHP.spriteWidth = 480;
TerminalHP.spriteHeight = 240;



Terminal.Position = new Vector2(canvas.offsetWidth/2 - Terminal.sourceImage.width/2, canvas.offsetHeight/2-Terminal.sourceImage.height/2);
for(let eb = 0; eb < EnergyBalls.length; eb++)
{
    EnergyBalls[eb] = new gameObject(300, canvas.getBoundingClientRect().bottom-50,1,"./EnergyBall.png");
    //EnergyBalls[eb].Position = new Vector2(2,2);
    EnergyBalls[eb].spriteWidth = 480;
    EnergyBalls[eb].spriteHeight = 480;
    EnergyBalls[eb].sourceImage.width = 24;
    EnergyBalls[eb].sourceImage.height = 24;
}

let enemies = [];

enemies.length = 100;
for(let p = 0; p < enemies.length; p++)
{
    if(p*Math.random() > Math.random()*40)
    {
        enemies[p] =  new Enemey(0,0 ,false,"FragClust.png");
        enemies[p].Position = new Vector2(1-32*p,1-32*p );
    }else if(p*Math.random() > Math.random()*6)
    {
        enemies[p] =  new Enemey(0,0 ,false,"CorrupCell.png");
        enemies[p].Position = new Vector2(1-32*p,1-32*p );
    }else{
        enemies[p] =  new Enemey(0,0 ,false,"MemLeak.png");
        enemies[p].Position = new Vector2(1-32*p,1-32*p );
    }

}
let cellPlaceNumber = 0;
let time = 0;
let frameRateTimer =0.05;
let frameRateTimeMax = 0.05;
let date = new Date();
let elapsedTime = 0;

// random generation
//game state numeral
//0 start
//1 running
//2 game over
//3 main Menu
//innit
let GAMESTATE = 0;
//sets up all or stuff for game
Input();
gameLoop();


