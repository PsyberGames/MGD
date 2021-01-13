let hasDone = false;

var buttonArray = [];
const canvas = document.getElementById("gameCanvas");


let ctx;
ctx = canvas.getContext("2d");

var upBUTTON = new button("./UpButton.png",0+150,500);
buttonArray.push(upBUTTON);

var dnBUTTON = new button("./UpButton.png",0+150,600);
buttonArray.push(dnBUTTON);
var lfBUTTON = new button("./UpButton.png",0+75,550);
buttonArray.push(lfBUTTON);
var rtBUTTON = new button("./UpButton.png",0+225,550);
buttonArray.push(rtBUTTON);

var ctrlStick = new AnalogStick();
var hRatio = canvas.clientWidth / window.innerWidth;
var vRatio = canvas.clientHeight/ window.innerHeight;
var ratio = Math.min(hRatio,vRatio);

let player = new Player(canvas.clientWidth/2,canvas.clientHeight/2,false,"MGDcharacter.png");
let totalCount = 0;
let keys = {87:false,83:false,68:false, 65 :false};
let TCHES = {0 : false, 2 : true, 2 : false}
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

let enemies = [];

enemies.length = 10;
for(let p = 0; p < enemies.length; p++)
{
    enemies[p] =  new gameObject(200+(p*100),canvas.clientHeight/2+50,false,"FragClust.png");
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


