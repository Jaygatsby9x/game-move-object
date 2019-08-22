function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:'+ this.left + 'px;position:absolute;" />';
    };
    this.speed=100;
    this.moveRight = function () {
        this.left += this.speed;
    };
    this.moveDown = function () {
        this.top += this.speed;
    };

    this.moveLeft = function () {
        this.left -= this.speed;
    };

    this.moveTop = function () {
        this.top -= this.speed;
    }
}
let hero = new Hero( 'ys.gif', 0, 0, 200);
function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top == 0) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size-50 && hero.left >= window.innerWidth - hero.size) {
        hero.moveDown();
    } else if (hero.left >0 && hero.top >= window.innerHeight - hero.size-50) {
        hero.moveLeft();
    } else if (hero.top>0 && hero.left==0){
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();