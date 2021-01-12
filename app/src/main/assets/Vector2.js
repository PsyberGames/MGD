class Vector2{
//position
    constructor(x,y) {
        this.x = x;
        this.y = y;
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