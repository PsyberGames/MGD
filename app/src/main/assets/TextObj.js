class TextObj {
    constructor(msgString, variable, xPos, yPos) {
        // the message wanted as string on screen
        this.message = msgString;
        // the variable that is change that should be applied to screen
        this.var = variable;
        //positioning on screen
        this.x = xPos;
        this.y = yPos;
        this.colour = "white";
        this.font = "32px Arial";
    }

    draw(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.colour;
        ctx.fillText(this.message + this.var.toString(), this.x, this.y);
    }
}