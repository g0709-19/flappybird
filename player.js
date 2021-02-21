
let playerPos= new [2];//플레이어의 중점
let r = 20;//캐릭터는 반지름이 20px인 원으로 그려진다.

playerStart=function()
{
    playerPos[0]=400;
    playerPos[1]=250;
}

playerUp=function()//위쪽 방향키 눌렀을 때
{
    playerPos[1]+=1;
}
playerDown=function()//아무 조작도 없을때 플레이어는 떨어진다.
{
    playerPos[1]-=1;
}
IsGameOver=function()//플레이어가 화면의 바닥이나 천장에 닿았을때 false반환
{
    if(playerPos[1]-r<=0)
        return false;
    if(playerPos[1]+r>=799)
        return false;

        return true;
}
GetplayerPos=function()//플레이어 위치 반환
{
    return playerPos;
}
GetRadius=function()//플레이어의 반지름 반환
{
    return r;
}

