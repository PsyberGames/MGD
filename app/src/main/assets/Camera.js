class camera {
//screen drawing
    constructor(xpos, ypos, fps) {
        this.x = xpos;
        this.y = ypos;
        this.fps = fps;
    }

    Start() {
        //set up just hope through window that allows object to be loaded
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        BG.draw(ctx);
        mouseObject.draw(ctx);
    }

    GameOver() {
        //set up basic game over
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        BG.draw(ctx);
        hSText.draw(ctx);
        mouseObject.draw(ctx);
    }

    MainMenu() {
        //set up basci main menu
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        BG.draw(ctx);

        mouseObject.draw(ctx);
    }

    update() {
        //running
        //clear render space for new render
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        //Background zone
        BG.draw(ctx);

        //objects zone.
        for (let p = 0; p < enemies.length; p++) {
            //drawing enemies
            enemies[p].draw(ctx);
        }
        for (let eb = 0; eb < EnergyBalls.length - 1; eb++) {
            //AmmoEnergyBalls
            EnergyBalls[eb].draw(ctx);
        }
        for (let fb = 0; fb < FiredEBList.length - 1; fb++) {
            //FIREDEnergyBalls
            FiredEBList[fb].draw(ctx);
        }
        //depending on the height of the player fake depth of camera
        if (Terminal.Position.y < player.Position.y + 12) {
            //draws player infront of the terminal
            Terminal.draw(ctx);

            player.draw(ctx);
        } else {
            //player can pass behind the terminal like if it was 3d object
            player.draw(ctx);

            Terminal.draw(ctx);


        }

        //UI

        ctrlStick.draw(ctx);
        ctrlStick.controlStick.draw(ctx);
        ctrlStick2.draw(ctx);
        ctrlStick2.controlStick.draw(ctx);
        if (TCHES[0]) {
            mouseObject.draw(ctx);
        }

        mouseObject.draw(ctx);
        TerminalHP.draw(ctx);
        hSText.draw(ctx);
        tHpText.draw(ctx);
        boundRight.draw(ctx);


    }
}

