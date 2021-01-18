class camera{
//screen drawing
    constructor(xpos,ypos,fps) {
        this.x = xpos;
        this.y = ypos;
        this.fps = fps;
    }
    Start(){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        BG.draw(ctx);
        mouseObject.draw(ctx);
    }
    GameOver(){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        BG.draw(ctx);

        mouseObject.draw(ctx);
    }
    MainMenu(){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        BG.draw(ctx);

        mouseObject.draw(ctx);
    }
    update(){
        //running

        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        BG.draw(ctx);
        //objects zone.
        for(let p = 0; p < enemies.length; p++)
        {
            enemies[p].draw(ctx);
        }
        for(let eb= 0; eb < EnergyBalls.length-1 ; eb++)
        {
            //EnergyBalls[eb].update();
            EnergyBalls[eb].draw(ctx);
        }
        for(let fb= 0; fb < FiredEBList.length-1 ; fb++)
        {
            //EnergyBalls[eb].update();
            FiredEBList[fb].draw(ctx);
        }
        if(Terminal.Position.y < player.Position.y+12)
        {
            //Terminal.update();
            Terminal.draw(ctx);
            //player
            player.draw(ctx);
        }else{
            player.draw(ctx);
            //Terminal.update();
            Terminal.draw(ctx);
            //player

        }

        //buttonArray[0].draw(ctx);
       
            //buttonArray[1].draw(ctx);
            //buttonArray[2].draw(ctx);
            //buttonArray[3].draw(ctx);
            ctrlStick.draw(ctx);
            ctrlStick.controlStick.draw(ctx);
            ctrlStick2.draw(ctx);
            ctrlStick2.controlStick.draw(ctx);
            if(TCHES[0])
            {
                mouseObject.draw(ctx);
            }
        mouseObject.draw(ctx);
        TerminalHP.draw(ctx);
        //UI
    }
}

