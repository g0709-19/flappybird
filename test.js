

//let bird = GetplayerPos();
document.addEventListener('keydown', (e) => {
    const keycode = e.keyCode;
    console.log('hi');
    isKeyDown = true;
    if (keycode == 38)//위쪽
    {
        playerUp();
    }
    if (keycode == 40)//위쪽
    {
        playerDown();
    }
    if (IsGameOver() == true) {
        console.log("Game Over!");
    }
})

function draw() {
    var canvas = document.getElementById('test');
    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');
        // ctx.clearRect(0, 0, 500, 800);
        ctx.beginPath();
        ctx.arc(playerPos[0], playerPos[1], GetRadius(), 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

    }


}

function repeat() {
    playerStart();
    setInterval(draw, 1);
}

// repeat();