

//let bird = GetplayerPos();


function draw(){
    playerStart();
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        console.log(playerPos[0],playerPos[1]);
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