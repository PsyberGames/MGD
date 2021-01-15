class camera{
//screen drawing
    constructor(xpos,ypos,fps) {
        this.x = xpos;
        this.y = ypos;
        this.fps = fps;
    }
    update(){
        //bg

        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        BG.draw(ctx);
        //objects zone.
        for(let p = 0; p < enemies.length; p++)
        {
            enemies[p].draw(ctx);
        }
        for(let eb= 0; eb < EnergyBalls.length ; eb++)
        {
            //EnergyBalls[eb].update();
            EnergyBalls[eb].draw(ctx);
        }
        if(Terminal.Position.y < player.gameObject.Position.y+12)
        {
            //Terminal.update();
            Terminal.draw(ctx);
            //player
            player.gameObject.draw(ctx);
        }else{
            player.gameObject.draw(ctx);
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

        //UI
    }
}

