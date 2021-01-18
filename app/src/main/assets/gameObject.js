class gameObject{
    
constructor(xpos,ypos,canMove,sourceImage)
{
    //game objects
    //this .positon
    this.Position =  new Vector2(xpos,ypos);
    //is the gameobject a static gameobject
    this.canMove = canMove;
    //image of the game object
    this.sourceImage = new Image(64,64);
    this.sourceImage.src = sourceImage;
    //needing implementing in the constructor
    this.spriteOriginX = 0;
    this.spriteOriginY = 0;
    this.spriteWidth = 64;
    this.spriteHeight = 64;
    this.Velocity = new Vector2(0,0);
    this.objectAnimTime = 0;
    this.TargetObj = 0;

}
    colCheck(shapeA, shapeB) {
        // get the vectors to check against

        if(shapeA == Terminal)
        {
            var vX = (shapeA.Position.x + (shapeA.spriteWidth / 6)) - (shapeB.Position.x + (shapeB.spriteWidth / 4)),
                vY = (shapeA.Position.y + (shapeA.spriteHeight / 8)) - (shapeB.Position.y + (shapeB.spriteHeight / 4)),
                // add the half widths and half heights of the objects
                hWidths = (shapeA.spriteWidth / 6) + (shapeB.spriteWidth / 4),
                hHeights = (shapeA.spriteHeight / 8) + (shapeB.spriteHeight / 4),
                colDir = null;

            // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
            if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
                // figures out on which side we are colliding (top, bottom, left, or right)
                var oX = hWidths - Math.abs(vX),
                    oY = hHeights - Math.abs(vY);
                if (oX >= oY) {
                    if (vY > 0) {
                        colDir = "t";
                        shapeA.y += oY;
                    } else {
                        colDir = "b";
                        shapeA.y -= oY;
                    }
                } else {
                    if (vX > 0) {
                        colDir = "l";
                        shapeA.x += oX;
                    } else {
                        colDir = "r";
                        shapeA.x -= oX;
                    }
                }
            }
            return colDir;
        }else{
            var vX = (shapeA.Position.x + (shapeA.spriteWidth / 4)) - (shapeB.Position.x + (shapeB.spriteWidth / 4)),
                vY = (shapeA.Position.y + (shapeA.spriteHeight / 4)) - (shapeB.Position.y + (shapeB.spriteHeight / 4)),
                // add the half widths and half heights of the objects
                hWidths = (shapeA.spriteWidth / 4) + (shapeB.spriteWidth / 4),
                hHeights = (shapeA.spriteHeight / 4) + (shapeB.spriteHeight / 4),
                colDir = null;

            // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
            if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
                // figures out on which side we are colliding (top, bottom, left, or right)
                var oX = hWidths - Math.abs(vX),
                    oY = hHeights - Math.abs(vY);
                if (oX >= oY) {
                    if (vY > 0) {
                        colDir = "t";
                        shapeA.y += oY;
                    } else {
                        colDir = "b";
                        shapeA.y -= oY;
                    }
                } else {
                    if (vX > 0) {
                        colDir = "l";
                        shapeA.x += oX;
                    } else {
                        colDir = "r";
                        shapeA.x -= oX;
                    }
                }
            }
            return colDir;
        }


    }

    animationUpdate(spriteHeight, spriteWidth,cellCount)
    {

        //set the sprite row location 1 2 3 4 or in compute logic 0 1 2 3
        this.spriteOriginY = spriteHeight;

        //moving the cell location to the next cell in the animation
        this.spriteOriginX +=spriteWidth;
        //if the cell location is  greater than the spritesheet cell size reset back to first cell
        if(this.spriteOriginX > spriteWidth*cellCount)
        {
            this.spriteOriginX = 0;
        }
    }

    update(){
    if(this.TargetObj != 0)
    {
        this.Position = new Vector2(this.Position.x +this.Velocity.x * 5,this.Position.y +this.Velocity.y * 20);
    }else if(this != player)
    {
        this.objectAnimTime+=1;
        if(this.Velocity.x > .8)
        {
            this.Velocity.x = .8;
        }
        if(this.Velocity.y > .8)
        {
            this.Velocity.y = .8;
        }
    }

    this.Position = new Vector2(this.Position.x +this.Velocity.x,this.Position.y +this.Velocity.y);
    if(this.objectAnimTime ===4)
    {
        this.animationUpdate(0,64,9);
        this.objectAnimTime = 0;
    }

    this.draw(ctx);

    }



    draw(ctx) {
        //ctx.drawImage(this.sourceImage,this.Position.x,this.Position.y);
        //ctx.draw(this.sourceImage,50,50,this.Position.x,this.Position.y,50,50);
        // is 400 is the width of a cell
        // is 400 is the height of a cell
        //0 is the origin width  of the sprite to draw from the imagesource
        //100 is the origin height of the sprite to draw from the imagesource
        //450 is the sprite width
        //450 is the sprite height
        ctx.drawImage(this.sourceImage,this.spriteOriginX, this.spriteOriginY, this.spriteWidth, this.spriteHeight, this.Position.x, this.Position.y, this.sourceImage.width, this.sourceImage.height);

    }
}

