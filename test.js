

//let bird = GetplayerPos();
document.addEventListener('keydown',(e)=>{
    const keycode = e.keyCode;
console.log('hi');
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

function draw(){
    
    playerStart();
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.arc(playerPos[0], playerPos[1], GetRadius(), 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function repeat(){
    playerStart();
    while(1)
    {
        setInterval(draw, 1000);
    }
}

draw();