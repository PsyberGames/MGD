function gameLoop(){
moving = moveX+moveY;
//game loop
    mouseObject.Position = new Vector2(mAxis.x - mouseObject.spriteWidth, mAxis.y-mouseObject.spriteHeight);
    console.debug(mouseObject.Position);
    console.debug(buttonArray[0].Position);
    if(touches > 0 || mButtons[0])
    {
        var a = buttonArray[0].butCheck(buttonArray[0],mouseObject);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[0])
        {
            Axis.y = -2.5;
            moveY  = 1;
            cellPlaceNumber = player.gameObject.spriteHeight;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[0].butCheck(buttonArray[1],mouseObject);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[1])
        {
            Axis.y = 2.5;
            moveY  = 1;
            cellPlaceNumber = player.gameObject.spriteHeight;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[2].butCheck(buttonArray[2],mouseObject);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[2])
        {
            Axis.x = -2.5;
            moveX = 1;
            cellPlaceNumber = player.gameObject.spriteHeight*3;
            time++;
            console.debug("this is now working ")
        }
        var a = buttonArray[3].butCheck(buttonArray[3],mouseObject);
        if((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[3])
        {
            Axis.x = 2.5;
            moveX = 1;
            cellPlaceNumber = player.gameObject.spriteHeight*3;
            time++;
            console.debug("this is now working ")
        }
    }
    //console.debug(mAxis);
    if(mButtons[0] === true)
    {
        console.debug("mouse button left");
    }
    if(keys[87] === true)
    {
        Axis.y = -2.5;
        moveY  = 1;
        cellPlaceNumber = player.gameObject.spriteHeight;
    }

    if(keys[83] === true)
    {
        Axis.y = 2.5;
        moveY = 1;
        cellPlaceNumber =0;
    }



    if(keys[32] === true )
    {
        console.debug("fire a rocket FIRE FIRE FIRE!");
    }
    if(keys[68] === true)
    {
        Axis.x = 2.5;
        moveX = 1;
        cellPlaceNumber = player.gameObject.spriteHeight*3;
    }

    if(keys[65] === true)
    {
        Axis.x = -2.5;
        moveX =1;
        cellPlaceNumber = player.gameObject.spriteHeight * 2;
    }
    for(let e = 0; e < enemies.length; e++)
    {
        var collider = enemies[e].colCheck(enemies[e],player);
        if (collider === "l" || collider === "r") {
            Axis.x = 0;
            moveX = 0;
        } else if(collider === "t" || collider === "b"){
            Axis.y = 0;
            moveY = 0;
        }else{

        }
    }
    
    if( (keys[65]== true || keys[68] == true  || keys[87] == true || keys[83] == true) && moving !=0 )
    {
        time++;
    }




    if(moving != 0)
    {
        if(time === 4) {
            time = 0;
            player.gameObject.animationUpdate(cellPlaceNumber, player.gameObject.spriteWidth, 9);
        }
        player.gameObject.Velocity= new Vector2(Axis.x,Axis.y);
        player.gameObject.update();
        Axis.x = 0;
        Axis.y = 0;

    }


    for(let p = 0; p < enemies.length; p++)
    {

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


}