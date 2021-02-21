
let playerPos = [];//플레이어의 중점
let r = 20;//캐릭터는 반지름이 20px인 원으로 그려진다.

let score = 0;
//const __player = {};

function addScore()//스코어 증가
{
    score++;
}

function playerStart() {
    playerPos[0] = 250;
    playerPos[1] = 250;
}

function playerUp()//위쪽 방향키 눌렀을 때
{
    playerPos[1] -= 10;

}
function playerDown()//아무 조작도 없을때 플레이어는 떨어진다.
{
    playerPos[1] += 10;
}
function IsGameOver()//플레이어가 화면의 바닥이나 천장에 닿았을때 false반환
{
    if (playerPos[1] - r <= 0)
        return true;
    if (playerPos[1] + r >= 500)
        return true;

    return false;
}
function GetplayerPos()//플레이어 위치 반환
{
    return playerPos;
}
function GetRadius()//플레이어의 반지름 반환
{
    return r;
}

