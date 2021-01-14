class AnalogStick extends gameObject{
constructor( x, y){
    
    super(x ,y,1,"./UpButton.png");
    this.innnerPosition = new Vector2(this.spriteWidth/2,this.spriteHeight/2);
    this.centre = new Vector2(x,y);
    
    this.controlStick = new gameObject(this.centre.x,this.centre.y,1,"./ControlStick.png");

    this.isControlstickCentre = new Vector2(this.controlStick.Position.x - this.controlStick.spriteWidth/2, this.controlStick.Position.y - this.controlStick.spriteHeight/2 );

}
    
butCheck(shapeA, shapeB) {
    // get the vectors to check against


    var vX = (shapeA.Position.x + (shapeA.spriteWidth / 2)) - (shapeB.Position.x + (shapeB.spriteWidth / 2)),
        vY = (shapeA.Position.y + (shapeA.spriteHeight / 2)) - (shapeB.Position.y + (shapeB.spriteHeight / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.spriteWidth / 2) + (shapeB.spriteWidth / 2),
        hHeights = (shapeA.spriteHeight / 2) + (shapeB.spriteHeight / 2),
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