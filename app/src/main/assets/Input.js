function Input(){
    //input
    window.addEventListener("mousedown", (mouse)=>{
        mButtons[mouse.button] = true;
        if(touches < 2) {
            touches += 1;
        }
    });
    window.addEventListener("mouseup", (mouse)=>{
        mButtons[mouse.button] = false;
        if(touches != 0) {
            touches -= 1;
        }
    });
    window.addEventListener("mousemove", (axis)=>{
        
       //mAxis = axis;
       //mouseObject.Position = mAxis;
       
        
    });

    window.addEventListener("touchstart", (touch)=>{
        TCHES["0"] = true;
    if(touch === true)
    {
        touchObj = touch.touches[0];
        mouseObject.Position = touch;

        if(touches != 2)
        {
            touches +=1;
        }

    }
    });


    window.addEventListener("touchmove", (touchMove)=>{

    mAxis = new Vector2((touchMove.touches[0].clientX-canvas.getBoundingClientRect().left), (touchMove.touches[0].clientY-canvas.getBoundingClientRect().top));
    mouseObject.Position = new Vector2(mAxis.x,mAxis.y);
    touchObj.Position = mouseObject.Position;

    });

    window.addEventListener("touchend", (touch)=>{
        touch.preventDefault();
        TCHES["0"] = false;
        if(touch === true)
        {
            touch.preventDefault();
            if(touches != 0)
            {
                touches -=1;

            }
        }
    });

    window.addEventListener('keyup',(input)=>{

            if(keys[input.keyCode] == true)
            {
                keys[input.keyCode] = false;
            }



    });

    window.addEventListener('keydown',(input)=>{
        if(keys[input.keyCode] != true)
        {
            keys[input.keyCode] = true;
        }


    });



}