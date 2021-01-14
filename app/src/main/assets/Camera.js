class camera{
//screen drawing
    constructor(xpos,ypos,fps) {
        this.x = xpos;
        this.y = ypos;
        this.fps = fps;
    }
    update(){
        //bg

        ctx.clearRect(0,0,1366,720);
        BG.draw(ctx);
        //objects zone.
        for(let p = 0; p < enemies.length; p++)
        {
            enemies[p].draw(ctx);
        }


        //player
        player.gameObject.draw(ctx);
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

        //UI
    }
}

