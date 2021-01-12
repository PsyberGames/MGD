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
        
       mAxis = axis;
       
        
    });
    window.addEventListener("touchstart", (touch)=>{
    if(touch === true)
    {
        
        if(touches != 2)
        {
            touches +=1;
        }

    }
    });
    window.addEventListener("touchend", (touch)=>{
        if(touch === true)
        {
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