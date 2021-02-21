/*
플레이어, 벽 충돌
시간 지날 때마다 벽 위치 이동
랜덤 생성
*/

class Wall {
    step = 1;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    move() {
        this.x -= this.step;
    }
}

const a = 300;
const column = {
    top: new Wall(a, 0, 20, 50),
    bottom: new Wall(a, 100, 20, 50)
}

const ground = new Wall(0, 500, 500, 800);

const __wall = {};

const canvas = document.getElementById('test');
const ctx = canvas.getContext('2d');

__wall.test = function () {
    setInterval(() => {
        __wall.clearColumns();
        __wall.drawColumn();
        column.top.move();
        column.bottom.move();
    }, 10);
    __wall.drawGround();
};

__wall.clearColumns = function () {
    ctx.clearRect(0, 0, 500, 500);
}

__wall.drawColumn = function () {
    const top = column.top;
    const bottom = column.bottom;
    ctx.fillRect(top.x, top.y, top.width, top.height);
    ctx.fillRect(bottom.x, bottom.y, bottom.width, bottom.height);
}

__wall.drawGround = function () {
    ctx.fillRect(ground.x, ground.y, ground.width, ground.height);
}

__wall.test();