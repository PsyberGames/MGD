function Normalized(value,max,min){
    console.debug((value-min)/(max-min));
    if((value-min)/(max-min) < -1)
    {
        return -1;
    }else if((value-min)/(max-min) > 1)
    {
        return 1;
    }
    return (value-min)/(max-min);

}
function gameLoop(){
//console.log(player.healthpool);
console.debug(EnergyBalls[0].Velocity);


if(mButtons["0"])
{
    let targetDirectionX = mouseObject.Position.x - player.gameObject.Position.x;
    let targetDirectionY = mouseObject.Position.y - player.gameObject.Position.y;

    let targetDirection = new Vector2(Normalized(targetDirectionX,canvas.clientWidth/2,0),Normalized(targetDirectionY,canvas.clientHeight/2,0));
    EnergyBalls[0].Velocity = new Vector2(targetDirection.x, targetDirection.y);
        console.debug(targetDirection);
    EnergyBalls[0].update();
    //console.debug("fire fire fire");
}
    EnergyBalls[0].objectAnimTime = 0;
    EnergyBalls[0].update();
    //now time
moving = moveX+moveY;
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

BG.sourceImage.width =canvas.getBoundingClientRect().width;
BG.spriteWidth = 1280;
BG.sourceImage.height = canvas.getBoundingClientRect().height;
BG.spriteHeight = 1024;

   // console.log(TCHES[1]);
   // console.log(TCHES[2]);
//game loop
    if( (keys[65]== true || keys[68] == true  || keys[87] == true || keys[83] == true) && moving !=0 )
    {
        time++;
    }
    if(touches > 0 || TCHES[0] || TCHES[1])
    {
        var a = buttonArray[0].butCheck(buttonArray[0],touchObj);
        
        if((a == "t" || a == "b" || a == "l" || a == "r") && TCHES[0])
        {
            Axis.y = -2.5;
            moveY  = 2;
            cellPlaceNumber = player.gameObject.spriteHeight;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[1].butCheck(buttonArray[1],touchObj);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[1])
        {
            Axis.y = 2.5;
            moveY  = 2;
            cellPlaceNumber = 0;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[2].butCheck(buttonArray[2],touchObj);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[2])
        {
            Axis.x = -2.5;
            moveX = 2;
            cellPlaceNumber = player.gameObject.spriteHeight*2;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[3].butCheck(buttonArray[3],touchObj);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[3])
        {
            Axis.x = 2.5;
            moveX = 2;
            cellPlaceNumber = player.gameObject.spriteHeight*3;
            time++;
            console.debug("this is now working ")
        }

        a = ctrlStick.butCheck(ctrlStick,mouseObject);
        var b = ctrlStick2.butCheck(ctrlStick2,mouseObject);
        if(a = ctrlStick.butCheck(ctrlStick,mouseObject))
        {

            if((a == "t" || a == "b" || a == "l" || a == "r"))
            {
                moving = true;
                time++;
                //console.debug(a);

                ctrlStick.controlStick.Position = mouseObject.Position;


                if(mouseObject.Position.x < ctrlStick.centre.x)
                {
                    if(mouseObject.Position.y > ctrlStick.centre.y)
                    {
                        dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                        dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos.Normalize();
                        dXYpos.Vec2Length();

                    }
                    if(mouseObject.Position.y < ctrlStick.centre.y)
                    {
                        dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                        dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos.Normalize();
                        dXYpos.Vec2Length();

                    }

                    console.debug(dXYpos);
                }
                if(mouseObject.Position.x > ctrlStick.centre.x)
                {
                    if(mouseObject.Position.y > ctrlStick.centre.y)
                    {
                        dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                        dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos.Normalize();
                        dXYpos.Vec2Length();

                    }
                    if(mouseObject.Position.y < ctrlStick.centre.y)
                    {
                        dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                        dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos.Normalize();
                        dXYpos.Vec2Length();

                    }
                    if(dXYpos.y < 0)
                    {
                        cellPlaceNumber = player.gameObject.spriteHeight;
                    }else{
                        cellPlaceNumber =0;
                    }
                    if(moving = true)
                    {
                        Axis = dXYpos;

                    }
                    console.debug(dXYpos);
                }



            }else{
                ctrlStick.controlStick.Position = ctrlStick.centre;
                moving = false;
            }

        }else if(b = ctrlStick2.butCheck(ctrlStick2,mouseObject)){

            if((b == "t" || b == "b" || b == "l" || b == "r"))
            {


                ctrlStick2.controlStick.Position = mouseObject.Position;


                if(mouseObject.Position.x < ctrlStick2.centre.x)
                {
                    if(mouseObject.Position.y > ctrlStick2.centre.y)
                    {
                        dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                        dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos2.Normalize();
                        dXYpos2.Vec2Length();

                    }
                    if(mouseObject.Position.y < ctrlStick2.centre.y)
                    {
                        dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                        dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos2.Normalize();
                        dXYpos2.Vec2Length();

                    }

                    console.debug(dXYpos);
                }
                if(mouseObject.Position.x > ctrlStick2.centre.x)
                {
                    if(mouseObject.Position.y > ctrlStick2.centre.y)
                    {
                        dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                        dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos2.Normalize();
                        dXYpos2.Vec2Length();

                    }
                    if(mouseObject.Position.y < ctrlStick2.centre.y)
                    {
                        dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                        dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                        //console.log(dXYpos.x);
                        //console.log("we are on the left side of the boundaries shoot left");
                        dXYpos2.Normalize();
                        dXYpos2.Vec2Length();

                    }


                    console.debug(dXYpos2);
                }



            }else{
                ctrlStick2.controlStick.Position = ctrlStick2.centre;
                moving = false;
            }
        }






    }else{
        ctrlStick.controlStick.Position = ctrlStick.centre;
        ctrlStick2.controlStick.Position = ctrlStick2.centre;
    }
    //console.debug(mAxis);
    if(mButtons[0] === true)
    {
        console.debug("mouse button left");
    }
    if(keys[87] === true)
    {
        Axis.y = -2.0;
        moveY  = 2;
        cellPlaceNumber = player.gameObject.spriteHeight;
    }

    if(keys[83] === true)
    {
        Axis.y = 2.0;
        moveY = 2;
        cellPlaceNumber =0;
    }



    if(keys[32] === true )
    {
        console.debug("fire a rocket FIRE FIRE FIRE!");
    }
    if(keys[68] === true)
    {
        Axis.x = 2.0;
        moveX = 2;
        cellPlaceNumber = player.gameObject.spriteHeight*3;
    }

    if(keys[65] === true)
    {
        Axis.x = -2.0;
        moveX =2;
        cellPlaceNumber = player.gameObject.spriteHeight * 2;
    }
        var TerminalCollider = player.gameObject.colCheck(Terminal,player);
        if (TerminalCollider === "l" || TerminalCollider === "r") {

            //playercollision
            Axis.x = 0;
            moveX = 0;
        } else if(TerminalCollider === "t" || TerminalCollider=== "b"){
            Axis.y = 0;
            moveY = 0;
        }else{}

    for(let e = 0; e < enemies.length; e++)
    {
        var collider = enemies[e].colCheck(enemies[e],player);
        if (collider === "l" || collider === "r") {
            //playercollision
            //Axis.x = 0;
            //moveX = 0;
        } else if(collider === "t" || collider === "b"){
            //Axis.y = 0;
            //moveY = 0;
        }else{

        }
    }
    





    if(moving != 0)
    {
        if(time === 4) {
            time = 0;
            player.gameObject.animationUpdate(cellPlaceNumber, player.gameObject.spriteWidth, 9);
        }
        player.gameObject.Velocity= new Vector2(Axis.x*1.15,Axis.y*1.15);
        player.gameObject.update();
        Axis.x = 0;
        Axis.y = 0;

    }
    for(let p = 0; p < enemies.length; p++)
    {



        

        enemies[p].AI();
        enemies[p].update();
        if(time === 4)
        {
            for( let e = 0; e <enemies.length; e++)
            {
                enemies[e].animationUpdate(64,64,9)*elapsedTime;

                time = 0;
            }

        }

    }



    Camera.x = player.gameObject.Position.x;
    Camera.y = player.gameObject.Position.y;

    Camera.update();
    window.requestAnimationFrame(gameLoop);
//timepass

}