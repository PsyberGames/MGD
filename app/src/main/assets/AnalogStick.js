class AnalogStick extends gameObject{
constructor(){
    
    super(canvas.clientWidth/1.03 ,canvas.clientHeight/1.33,1,"./UpButton.png");
    this.innnerPosition = new Vector2(this.spriteWidth/2,this.spriteHeight/2);
    this.centre = new Vector2(canvas.clientWidth/1.03 ,canvas.clientHeight/1.33);
    
    this.controlStick = new gameObject(this.centre.x,this.centre.y,1,"./ControlStick.png");

    

}
    
butCheck(shapeA, shapeB) {
    // get the vectors to check against

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