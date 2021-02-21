document.addEventListener('keydown',(e)=>{
    const keycode = e.keyCode;

    if(keycode ==38)//위쪽
    {
        playerUp();
    }
    if(keycode==40)
    {
        playerDown();
    }
    if(IsGameOver()==true)
    {
        console.log("Game Over!");
    }
})