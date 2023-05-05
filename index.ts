const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

interface Tile2{
    isAir(): boolean;
    isFlux(): boolean;
    isUNBREAKABLE(): boolean;
    isPLAYER(): boolean;
    isSTONE(): boolean;
    isFALLING_STONE(): boolean;
    isBOX(): boolean;
    isFALLING_BOX(): boolean;
    isKEY1(): boolean;
    isLOCK1(): boolean;
    isKEY2(): boolean;
    isLOCK2(): boolean;
}

class Lock2 implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return true;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}

class Key2 implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return true;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}

class Lock1 implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return true;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}


class Key1 implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return true;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}

class FallingBox implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return true;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}
class Box implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return true;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}

class FallingStone implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return true;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}

class Stone implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return true;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}
class Player implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return true;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}
class Unbreakable implements Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return true;
    }
}
class Flux implements  Tile2{
    isAir(): boolean {
        return false;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return true;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }
}
class Air implements Tile2{
    isAir(): boolean {
        return true;
    }

    isBOX(): boolean {
        return false;
    }

    isFALLING_BOX(): boolean {
        return false;
    }

    isFALLING_STONE(): boolean {
        return false;
    }

    isFlux(): boolean {
        return false;
    }

    isKEY1(): boolean {
        return false;
    }

    isKEY2(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    isPLAYER(): boolean {
        return false;
    }

    isSTONE(): boolean {
        return false;
    }

    isUNBREAKABLE(): boolean {
        return false;
    }

}

interface Input {
    handle(): void;
}

class Right implements Input {
    handle() {
        moveHorizontal(1);
    }
}

class Left implements Input {
    handle() {
        moveHorizontal(-1);
    }
}

class Down implements Input {
    handle() {
        moveVertical(1);
    }
}

class Up implements Input {
    handle() {
        moveVertical(-1);
    }
}

let playerx = 1;
let playery = 1;
let map: Tile2[][] = [
    [new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable()],
    [new Unbreakable(), new Player(), new Air(), new Flux(), new Flux(), new Unbreakable(), new Air(), new Unbreakable()],
    [new Unbreakable(), new Stone(), new Unbreakable(), new Box(), new Flux(), new Unbreakable(), new Air(), new Unbreakable()],
    [new Unbreakable(), new Key1(), new Stone(), new Flux(), new Flux(), new Unbreakable(), new Air(), new Unbreakable()],
    [new Unbreakable(), new Stone(), new Flux(), new Flux(), new Flux(), new Lock1(), new Air(), new Unbreakable()],
    [new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable()],
];

let inputs: Input[] = [];

function removeLock1(tile: Tile2) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === tile) {
                map[y][x] = new Air();
            }
        }
    }
}

function removeLock2(tile: Tile2) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === tile) {
                map[y][x] = new Air();
            }
        }
    }
}

function moveToTile(newx: number, newy: number) {
    map[playery][playerx] = new Air();
    map[newy][newx] = new Player();
    playerx = newx;
    playery = newy;
}

function moveHorizontal(dx: number) {
    if (map[playery][playerx + dx].isFlux()
        || map[playery][playerx + dx].isAir()) {
        moveToTile(playerx + dx, playery);
    } else if ((map[playery][playerx + dx].isSTONE()
            || map[playery][playerx + dx].isBOX())
        && map[playery][playerx + dx + dx].isAir()
        && !map[playery + 1][playerx + dx].isAir()) {
        map[playery][playerx + dx + dx] = map[playery][playerx + dx];
        moveToTile(playerx + dx, playery);
    } else if (map[playery][playerx + dx].isKEY1()) {
        remove(new Lock1());
        moveToTile(playerx + dx, playery);
    } else if (map[playery][playerx + dx].isKEY2()) {
        remove(new Lock2());
        moveToTile(playerx + dx, playery);
    }
}

function moveVertical(dy: number) {
    if (map[playery + dy][playerx].isFlux()
        || map[playery + dy][playerx].isAir()) {
        moveToTile(playerx, playery + dy);
    } else if (map[playery + dy][playerx].isKEY1()) {
        remove(new Lock1());
        moveToTile(playerx, playery + dy);
    } else if (map[playery + dy][playerx].isKEY2()) {
        remove(new Lock2());
        moveToTile(playerx, playery + dy);
    }
}

function handleInputs() {
    while (inputs.length > 0) {
        let input = inputs.pop();
        input.handle()
    }
}

function updateTile(y: number, x: number) {
    if ((map[y][x].isSTONE() || map[y][x].isFALLING_STONE())
        && map[y + 1][x].isAir()) {
        map[y + 1][x] = new FallingStone();
        map[y][x] = new Air();
    } else if ((map[y][x].isBOX() || map[y][x].isFALLING_BOX())
        && map[y + 1][x].isAir()) {
        map[y + 1][x] = new FallingBox();
        map[y][x] = new Air();
    } else if (map[y][x].isFALLING_STONE()) {
        map[y][x] = new Stone();
    } else if (map[y][x].isFALLING_BOX()) {
        map[y][x] = new Box();
    }
}

function updateMap() {
    for (let y = map.length - 1; y >= 0; y--) {
        for (let x = 0; x < map[y].length; x++) {
            updateTile(y, x);
        }
    }
}

function update() {
    handleInputs();
    updateMap();
}

function colorofTile(y: number, x: number, g: CanvasRenderingContext2D) {
    if (map[y][x].isFlux())
        g.fillStyle = "#ccffcc";
    else if (map[y][x].isUNBREAKABLE())
        g.fillStyle = "#999999";
    else if (map[y][x].isSTONE() || map[y][x].isFALLING_STONE())
        g.fillStyle = "#0000cc";
    else if (map[y][x].isBOX() || map[y][x].isFALLING_BOX())
        g.fillStyle = "#8b4513";
    else if (map[y][x].isKEY1() || map[y][x].isLOCK1())
        g.fillStyle = "#ffcc00";
    else if (map[y][x].isKEY2() || map[y][x].isLOCK2())
        g.fillStyle = "#00ccff";
}

function drawMap(g: CanvasRenderingContext2D) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            colorofTile(y, x, g);
            if (!map[y][x].isAir() && !map[y][x].isPLAYER())
                g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}

function drawPlayer(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ff0000";
    g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function createGraphics() {
    let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
    let g = canvas.getContext("2d");

    g.clearRect(0, 0, canvas.width, canvas.height);
    return g;
}

function draw() {
    let g = createGraphics();
    drawMap(g);
    drawPlayer(g);
}

function gameLoop() {
    let before = Date.now();
    update();
    draw();
    let after = Date.now();
    let frameTime = after - before;
    let sleep = SLEEP - frameTime;
    setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
    gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";


window.addEventListener("keydown", e => {
    if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
    else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
    else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
    else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

