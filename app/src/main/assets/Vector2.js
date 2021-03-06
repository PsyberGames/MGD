class Vector2{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        Vector2.prototype.Normalize = function ()
        {   //declaring a function for the class similar to other functions below the constructor
            this.length = 16;
            this.x = this.x/this.length; //assigning new value to x (dividing x by length of the vector)
            this.y= this.y/this.length; //assigning new value to y
        }
    }
    add(_Vector2)
    {
        return new Vector2(this.x +=_Vector2.x,this.y+=_Vector2.y);
    }
    subtract(_Vector2)
    {
        return new Vector2(this.x -=_Vector2.x,this.y-=_Vector2.y);
    }
    Multiply(_Amount)
    {
        return new Vector2(this.x *=_Amount, this.y*=_Amount);
    }
    Vec2Length()
    {
        return Math.sqrt(this.x *this.x + this.y * this.y);
    }
    Cross(_Vector2)
    {
       return this.x *_Vector2.y -this.y *_Vector2.x;
    }
    Dot(_Vector2)
    {
        return this.x * _Vector2.x + this.y *_Vector2.y;
    }
}