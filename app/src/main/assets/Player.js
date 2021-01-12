class Player{
    constructor(xpos,ypos,canMove,sourceImage) {
        this.gameObject = new gameObject(xpos,ypos,canMove,sourceImage);
        this.a = 0;
    }
    collision()
    {
            return true;
    }
}