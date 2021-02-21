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

    // 그 좌표를 포함하는지
    has(x, y, radius) {
        for (let i = this.y; i < this.height; ++i) {
            for (let j = this.x; j < this.width; ++j) {
                const x_diff = j - x;
                const y_diff = i - y;
                const distance = Math.sqrt((x_diff * x_diff) + (y_diff * y_diff));
                //console.log(distance);
                if (radius > distance) return true;
            }
        }
        return false;
    }
}

const ground = new Wall(0, 500, 500, 800);

const __wall = {};

const canvas = document.getElementById('test');
const ctx = canvas.getContext('2d');

let column = {};

__wall.test = function () {
    column = __wall.createColumn();
    setInterval(() => {
        __wall.clearColumns();
        __wall.drawColumn();
        if (__wall.hasCollided()) {
            console.log("게임오버. 벽과 충돌");
        }
        __wall.drawPlayer();
        if (__wall.hasColumnRemoved())
            column = __wall.createColumn();
        column.top.move();
        column.bottom.move();
    }, 10);
    __wall.drawGround();
};

playerStart();
__wall.drawPlayer = function () {
    ctx.beginPath();
    ctx.arc(playerPos[0], playerPos[1], GetRadius(), 0, 2 * Math.PI);
    ctx.fill();
    // ctx.restore();
};

__wall.hasColumnRemoved = function () {
    return column.top.x < 0 - column.top.width;
};

__wall.createColumn = function () {
    const WIDTH = 80;
    const HEIGHT = 300;
    const SPACE = 100;
    const top_r = Math.round(Math.random() * HEIGHT);
    const bottom_r = top_r + SPACE;
    const top = new Wall(500, 0, WIDTH, top_r);
    const bottom = new Wall(500, bottom_r, WIDTH, 500 - bottom_r);
    return { top, bottom };
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

// playerStart();
// 플레이어, 벽 충돌
__wall.hasCollided = function () {
    playerLoc = GetplayerPos();
    const x = playerLoc[0];
    const y = playerLoc[1];

    console.log(column.top.has(x, y, 3), column.bottom.has(x, y, 3));
    return column.top.has(x, y, 3) || column.bottom.has(x, y, 3);
}

__wall.test();