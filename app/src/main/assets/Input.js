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
        //touch.preventDefault();
        TCHES["0"] = true;
    if(touch === true)
    {
        touchObj = touch.touches[0];
        mouseObject.Position = touchObj.Position;

        if(touches != 2)
        {
            touches +=1;
        }

    }
    });


    canvas.addEventListener("touchmove", (touchMove)=>{

    touchMove.preventDefault();
    //getComputedStyle(canvas).left;
    var cRct = canvas.getBoundingClientRect();


    let tPos = touchMove.touches[0];
    console.log(tPos);

    let AR = canvas.offsetHeight/canvas.offsetWidth;

        mAxis = new Vector2(touchMove.touches[0].pageX, (touchMove.touches[0].pageY));

        console.log(mAxis.x);
    mouseObject.Position = mAxis;
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