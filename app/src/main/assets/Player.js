class Player extends gameObject {
    constructor(xpos, ypos, canMove, sourceImage) {
        super(xpos, ypos, canMove, sourceImage);
        this.a = 0;
        this.highscore = 0;
        this.healthpool = 100;


    }

}