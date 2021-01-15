class Enemey extends gameObject{
    constructor(xpos,ypos,canMove,sourceimgage) {
        super(xpos,ypos,canMove,sourceimgage);
        var futureVe = new Vector2(0,0);
        var distance = 0 ;


        Enemey.prototype.AI = function(){
            let rect = canvas.getBoundingClientRect();
            let refactPos1 = this.Position.x - rect.left;
            let refactPos2 = this.Position.y - rect.top;
            let refactPos21 = player.gameObject.Position.x - rect.left;
            let refactPos22 = player.gameObject.Position.y - rect.top;
            let newPos1 = new Vector2(refactPos1,refactPos2);
            let newPos2 = new Vector2(refactPos21,refactPos22);
            this.distance = (newPos1.x *newPos1.x - newPos2.x*newPos2.x)+(newPos1.y * newPos1.y - newPos2.y*newPos2.y)/(newPos1.x *newPos1.x - newPos2.x*newPos2.x)+(newPos1.y * newPos1.y - newPos2.y*newPos2.y);

            //console.log(Math.abs(this.distance/1000) );



            if(newPos1.x < newPos2.x)
            {

                if(newPos1.y < newPos2.y)
                {
                    this.futureVe = new Vector2(Math.random()+ 1*2,1*2);
                    //console.log("enemy is above player");
                }else{
                    this.futureVe = new Vector2(1*2,-1*2);
                    //console.log("enemy is below player ");
                }
                //console.log("enemy is left of the player");
            }else{
                if(newPos1.y < newPos2.y)
                {
                    this.futureVe = new Vector2(Math.random()+-1*2,1*2);
                    //console.log("enemy is above player");
                }else{
                    this.futureVe = new Vector2(-1*2,-1*2);
                    //console.log("enemy is below player ");
                }
                //console.log("enemy is right of the player");
            }


            if(Math.abs(this.distance/1000) > 99)
            {
                this.Velocity = this.futureVe;

                //console.log("not reached player");
            }
            if(Math.abs(this.distance/1000) <55)
            {
                this.futureVe += new Vector2(Math.acosh((Math.random()*233.2423)*Math.PI*Math.tanh(Math.PI)),Math.random()*133.3)-66*Math.PI;
                this.Position = new Vector2(-100,-100);
                //console.log("reach the player ");
                //console.log(newPos2.x);
            }


        };

    }


}