class Vector2{
//position
    constructor(x,y) {
        this.x = x;
        this.y = y;
        //found this on stack overflow and realized that could build your function inside the constructor
        //by refrencing the class name and then prototype then give your function name that equal function() { write your function.....  }
        Vector2.prototype.Normalize = function ()
        {
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