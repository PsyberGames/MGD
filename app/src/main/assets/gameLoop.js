//adding normalization of a number to the between 0 and 1 to handle direction for projectile velocity
//(PPS) Post Programming statement. After finally getting this implemented realized a lot of the code could be doing with normalizing
//and though the game is functional and fun, there is alot of structural aspect that could be improved a fair amount and make the code
//alot more efficiently will do if I have the time before hand!
function Normalized(value, max, min) {

    if ((value - min) / (max - min) < -1) {
        return -1;
    } else if ((value - min) / (max - min) > 1) {
        return 1;
    }
    return (value - min) / (max - min);

}

function gameLoop() {
//GAMESTATE SWITCH
    //Handles the switch between game state allowing the browser to have static game scene
    //well static in the sense that they are statically in the state until we choose to change
    //it or when a game function calls a change in GAMESTATE.
    switch (GAMESTATE) {
        case 0://START
            ctx.width = window.innerWidth;
            ctx.height = window.innerHeight;

            BG.sourceImage.src = "./MainMenu.png"
            BG.sourceImage.width = canvas.getBoundingClientRect().width;
            BG.spriteWidth = 1280;
            BG.sourceImage.height = canvas.getBoundingClientRect().height;
            BG.spriteHeight = 1024;
            if (mButtons["0"]) {
                THEME_Main.play()
                BG.sourceImage.src = "./BGDIGI.png"
                GAMESTATE = 1;
                console.log("GAME OVER MOFO");
            }

            Camera.Start();
            window.requestAnimationFrame(gameLoop);

            break;
        case 1://RUNNING

            hSText.message = "Highscore : ";
            hSText.var = player.highscore.toString();
            tHpText.var = player.healthpool.toFixed().toString() + "/" + "100";
            if (player.healthpool < 0) {
                GAMESTATE = 2;
            }

            TerminalHP.sourceImage.width = (960 / 100 * player.healthpool);


            console.log(player.highscore);
            if (THEME_Main.ended) {
                THEME_Main.play();
            }


            if (mButtons["0"]) {


                let targetDirectionX = mouseObject.Position.x - player.Position.x;
                let targetDirectionY = mouseObject.Position.y - player.Position.y;

                let targetDirection = new Vector2(Normalized(targetDirectionX, canvas.clientWidth / 2, 0), Normalized(targetDirectionY, canvas.clientHeight / 2, 0));
                EnergyBalls[EnergyBalls.length - 1].TargetObj = targetDirection;
                //let SFX_shot = new Audio
                _Audio.src = ("./SFX_SHOT.wav");
                let SFX_shot = new Audio(_Audio.src);

                if (time < 1) {
                    SFX_shot.volume = 0.13;
                    SFX_shot.play();
                    EnergyBalls[EnergyBalls.length - 1].Position = new Vector2(player.Position.x, player.Position.y)
                    EnergyBalls[EnergyBalls.length - 1].Velocity = new Vector2(targetDirection.x, targetDirection.y);

                    FiredEBList.push(EnergyBalls[EnergyBalls.length - 1]);
                    EnergyBalls[EnergyBalls.length - 1].update();
                    EnergyBalls.pop();
                }


                //console.debug("fire fire fire");
            }

            for (let fb = FiredEBList.length - 1; fb > 0; fb--) {


                if (FiredEBList[fb].Position.x < canvas.offsetLeft || FiredEBList[fb].Position.x > canvas.offsetWidth || FiredEBList[fb].Position.y < canvas.offsetTop || FiredEBList[fb].Position.y > canvas.offsetHeight) {
                    EnergyBalls.push(FiredEBList[fb]);
                    FiredEBList[fb].Velocity = new Vector2(0, 0);
                    FiredEBList[fb].Position = new Vector2(300, canvas.getBoundingClientRect().bottom - 50);
                    FiredEBList.pop();

                } else {
                    FiredEBList[fb].objectAnimTime = 0;
                    FiredEBList[fb].update();
                }
                for (let e = 0; e < enemies.length; e++) {

                    if (FiredEBList[fb]) {
                        let fbHit = FiredEBList[fb].colCheck(FiredEBList[fb], enemies[e]);
                        if (fbHit) {
                            EnergyBalls.push(FiredEBList[fb]);
                            FiredEBList[fb].Velocity = new Vector2(0, 0);
                            FiredEBList[fb].Position = new Vector2(300, canvas.getBoundingClientRect().bottom - 50);
                            FiredEBList.pop();
                            player.highscore += 100;

                            let ran2 = Math.random();
                            if (ran2 < 0.25) {
                                enemies[e].Position = new Vector2(-100, -100);
                            } else if (ran2 > 0.33 && ran2 < 0.66) {
                                enemies[e].Position = new Vector2(canvas.offsetWidth + 100, canvas.offsetTop - 100);
                            } else {
                                enemies[e].Position = new Vector2(canvas.offsetWidth + 100, canvas.offsetHeight + 100);
                            }
                        }

                    }


                }

            }

            //now time
            moving = moveX + moveY;
            ctx.width = window.innerWidth;
            ctx.height = window.innerHeight;

            BG.sourceImage.width = canvas.getBoundingClientRect().width;
            BG.spriteWidth = 1280;
            BG.sourceImage.height = canvas.getBoundingClientRect().height;
            BG.spriteHeight = 1024;


            if ((keys[65] == true || keys[68] == true || keys[87] == true || keys[83] == true || mButtons[0]) && moving != 0) {
                time++;
            } else {
                time++;
                moving = 1;
            }

            if (touches > 0 || TCHES[0] || TCHES[1]) {
                var a = buttonArray[0].butCheck(buttonArray[0], touchObj);

                if ((a == "t" || a == "b" || a == "l" || a == "r") && TCHES[0]) {
                    Axis.y = -2.5;
                    moveY = 2;
                    cellPlaceNumber = player.spriteHeight;
                    time++;
                    console.debug("this is now working ")
                }
                var a = buttonArray[1].butCheck(buttonArray[1], touchObj);
                if ((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[1]) {
                    Axis.y = 2.5;
                    moveY = 2;
                    cellPlaceNumber = 0;
                    time++;
                    console.debug("this is now working ")
                }
                var a = buttonArray[2].butCheck(buttonArray[2], touchObj);
                if ((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[2]) {
                    Axis.x = -2.5;
                    moveX = 2;
                    cellPlaceNumber = player.spriteHeight * 2;
                    time++;
                    console.debug("this is now working ")
                }
                var a = buttonArray[3].butCheck(buttonArray[3], touchObj);
                if ((a == "t" || a == "b" || a == "l" || a == "r") && buttonArray[3]) {
                    Axis.x = 2.5;
                    moveX = 2;
                    cellPlaceNumber = player.spriteHeight * 3;
                    time++;
                    console.debug("this is now working ")
                }

                a = ctrlStick.butCheck(ctrlStick, mouseObject);
                var b = ctrlStick2.butCheck(ctrlStick2, mouseObject);
                if (a = ctrlStick.butCheck(ctrlStick, mouseObject)) {

                    if ((a == "t" || a == "b" || a == "l" || a == "r")) {
                        moving = true;
                        time++;
                        //console.debug(a);

                        ctrlStick.controlStick.Position = mouseObject.Position;


                        if (mouseObject.Position.x < ctrlStick.centre.x) {
                            if (mouseObject.Position.y > ctrlStick.centre.y) {
                                dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                                dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos.Normalize();
                                dXYpos.Vec2Length();

                            }
                            if (mouseObject.Position.y < ctrlStick.centre.y) {
                                dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                                dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos.Normalize();
                                dXYpos.Vec2Length();

                            }

                            console.debug(dXYpos);
                        }
                        if (mouseObject.Position.x > ctrlStick.centre.x) {
                            if (mouseObject.Position.y > ctrlStick.centre.y) {
                                dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                                dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos.Normalize();
                                dXYpos.Vec2Length();

                            }
                            if (mouseObject.Position.y < ctrlStick.centre.y) {
                                dXYpos.x = mouseObject.Position.x - ctrlStick.centre.x;
                                dXYpos.y = mouseObject.Position.y - ctrlStick.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos.Normalize();
                                dXYpos.Vec2Length();

                            }
                            if (dXYpos.y < 0) {
                                cellPlaceNumber = player.spriteHeight;
                            } else {
                                cellPlaceNumber = 0;
                            }
                            if (moving = true) {
                                Axis = dXYpos;

                            }
                            console.debug(dXYpos);
                        }


                    } else {
                        ctrlStick.controlStick.Position = ctrlStick.centre;
                        moving = false;
                    }

                } else if (b = ctrlStick2.butCheck(ctrlStick2, mouseObject)) {

                    if ((b == "t" || b == "b" || b == "l" || b == "r")) {


                        ctrlStick2.controlStick.Position = mouseObject.Position;


                        if (mouseObject.Position.x < ctrlStick2.centre.x) {
                            if (mouseObject.Position.y > ctrlStick2.centre.y) {
                                dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                                dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos2.Normalize();
                                dXYpos2.Vec2Length();

                            }
                            if (mouseObject.Position.y < ctrlStick2.centre.y) {
                                dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                                dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos2.Normalize();
                                dXYpos2.Vec2Length();

                            }

                            console.debug(dXYpos);
                        }
                        if (mouseObject.Position.x > ctrlStick2.centre.x) {
                            if (mouseObject.Position.y > ctrlStick2.centre.y) {
                                dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                                dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos2.Normalize();
                                dXYpos2.Vec2Length();

                            }
                            if (mouseObject.Position.y < ctrlStick2.centre.y) {
                                dXYpos2.x = mouseObject.Position.x - ctrlStick2.centre.x;
                                dXYpos2.y = mouseObject.Position.y - ctrlStick2.centre.y
                                //console.log(dXYpos.x);
                                //console.log("we are on the left side of the boundaries shoot left");
                                dXYpos2.Normalize();
                                dXYpos2.Vec2Length();

                            }


                            console.debug(dXYpos2);
                        }


                    } else {
                        ctrlStick2.controlStick.Position = ctrlStick2.centre;
                        moving = false;
                    }
                }


            } else {
                ctrlStick.controlStick.Position = ctrlStick.centre;
                ctrlStick2.controlStick.Position = ctrlStick2.centre;
            }

            if (keys[87] === true) {
                Axis.y = -2.0;
                moveY = 2;
                cellPlaceNumber = player.spriteHeight;
            }

            if (keys[83] === true) {
                Axis.y = 2.0;
                moveY = 2;
                cellPlaceNumber = 0;
            }


            if (keys[32] === true) {
                console.debug("fire a rocket FIRE FIRE FIRE!");
            }
            if (keys[68] === true) {
                Axis.x = 2.0;
                moveX = 2;
                cellPlaceNumber = player.spriteHeight * 3;
            }

            if (keys[65] === true) {
                Axis.x = -2.0;
                moveX = 2;
                cellPlaceNumber = player.spriteHeight * 2;
            }
            var TerminalCollider = player.colCheck(Terminal, player);
            if (TerminalCollider === "l" || TerminalCollider === "r") {

                //playercollision
                Axis.x = 0;
                moveX = 0;
            } else if (TerminalCollider === "t" || TerminalCollider === "b") {
                Axis.y = 0;
                moveY = 0;
            } else {
            }

            for (let e = 0; e < enemies.length; e++) {
                var TerminalCollider = player.colCheck(Terminal, enemies[e]);
                if (TerminalCollider === "l" || TerminalCollider === "r") {
                    terminalHit();

                } else if (TerminalCollider === "t" || TerminalCollider === "b") {

                    terminalHit();
                } else {
                }


            }
            var collider = player.colCheck(player, boundTop);
            if (collider === "l" || collider === "r") {
                //playercollision
                //Axis.x = 0;
                //moveX = 0;
            } else if (collider === "b") {
                if (Axis.y < 0) {
                    Axis.y = 0;
                    moveY = 0;
                }


            }
            collider = player.colCheck(player, boundBot);
            if (collider === "l" || collider === "r") {
                //playercollision

            } else if (collider === "t") {
                if (Axis.y > 0) {
                    Axis.y = 0;
                    moveY = 0;
                }


            }
            collider = player.colCheck(player, boundLeft);
            if (collider === "l" || collider === "r") {
                //playercollision
                if (Axis.x < 0) {
                    Axis.x = 0;
                    moveX = 0;
                }

            } else if (collider === "t") {


            }
            collider = player.colCheck(player, boundRight);
            if (collider === "l" || collider === "r") {
                //playercollision
                if (Axis.x > 0) {
                    Axis.x = 0;
                    moveX = 0;
                }

            } else if (collider === "t") {


            }


            if (moving != 0) {
                if (time === 4) {
                    time = 0;
                    player.animationUpdate(cellPlaceNumber, player.spriteWidth, 9);
                }
                player.Velocity = new Vector2(Axis.x * 1.15, Axis.y * 1.15);
                player.update();
                Axis.x = 0;
                Axis.y = 0;

            } else {
                time = 0;
            }
            for (let p = 0; p < enemies.length; p++) {


                enemies[p].AI();
                enemies[p].update();
                if (time === 4) {
                    for (let e = 0; e < enemies.length; e++) {
                        enemies[e].animationUpdate(64, 64, 9) * elapsedTime;

                        time = 0;
                    }

                }

            }


            Camera.x = player.Position.x;
            Camera.y = player.Position.y;

            Camera.update();
            window.requestAnimationFrame(gameLoop);
            break;
        case 2://GAME OVER
            ctx.width = window.innerWidth;
            ctx.height = window.innerHeight;
            BG.sourceImage.src = "./GameOver.png"
            BG.sourceImage.width = canvas.getBoundingClientRect().width;
            BG.spriteWidth = 1280;
            BG.sourceImage.height = canvas.getBoundingClientRect().height;
            BG.spriteHeight = 1024;
            if (mButtons["0"]) {
                GAMESTATE = 3;
                window.open("./index.html");
                window.close()
                console.log("MAIN MENU MOFO");
            }

            Camera.GameOver();
            window.requestAnimationFrame(gameLoop);
            break;
        case 3://MAIN MENU

            ctx.width = window.innerWidth;
            ctx.height = window.innerHeight;
            BG.sourceImage.src = "./MainMenu.png"
            BG.sourceImage.width = canvas.getBoundingClientRect().width;
            BG.spriteWidth = 1280;
            BG.sourceImage.height = canvas.getBoundingClientRect().height;
            BG.spriteHeight = 1024;
            if (mButtons["0"]) {
                GAMESTATE = 1;
                console.log("START GAME MOFO");
            }

            Camera.MainMenu();
            window.requestAnimationFrame(gameLoop);
            break;

    }

    function terminalHit() {
        player.healthpool -= 0.1;
    }

//timepass

}