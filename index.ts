const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
    AIR,
    FLUX,
    UNBREAKABLE,
    PLAYER,
    STONE, FALLING_STONE,
    BOX, FALLING_BOX,
    KEY1, LOCK1,
    KEY2, LOCK2
}

interface Tile {
    isAir(): boolean;

    isLOCK1(): boolean;

    isLOCK2(): boolean;

    draw(y: number, x: number, g: CanvasRenderingContext2D): void;

    moveHorizontal(player: Player, dx: number): void;

    moveVertical(player: Player, dy: number): void;

    update(y: number, x: number): void;

    getBlockOnTopState(): FallingState;
}

interface FallingState {
    isFalling(): boolean

    moveHorizontal(player: Player, tile: Tile, dx: number): void

    drop(y: number, x: number, tile: Tile): void;
}

class FallStrategy {
    private falling: FallingState;

    constructor(falling: FallingState) {
        this.falling = falling;
    }

    update(tile: Tile, y: number, x: number) {
        this.falling = map[y + 1][x].getBlockOnTopState();
        this.falling.drop(y, x, tile);
    }

    moveHorizontal(player: Player, tile: Tile, dx: number) {
        this.falling.moveHorizontal(player, tile, dx);
    }
}

class Falling implements FallingState {
    isFalling(): boolean {
        return true;
    }

    moveHorizontal(player: Player, tile: Tile, dx: number): void {
    }

    drop(y: number, x: number, tile: Tile) {
        map[y + 1][x] = tile;
        map[y][x] = new Air();
    }
}

class Resting implements FallingState {
    isFalling(): boolean {
        return false;
    }

    moveHorizontal(player: Player, tile: Tile, dx: number): void {
        player.pushHorizontal(tile, dx);
    }

    drop(y: number, x: number, tile: Tile) {
    }
}

class Lock1 implements Tile {
    private keyConfiguration: KeyConfiguration

    constructor(keyConfiguration: KeyConfiguration) {
        this.keyConfiguration = keyConfiguration
    }

    moveHorizontal(player: Player, dx: number) {
    }


    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        this.keyConfiguration.setColor(g)
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }


    isLOCK1(): boolean {
        return this.keyConfiguration.lock1;
    }


    isLOCK2(): boolean {
        return !this.keyConfiguration.lock1;
    }

    moveVertical(player: Player, dy: number) {
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}


class Key implements Tile {
    private keyConfiguration: KeyConfiguration

    constructor(keyConfiguration: KeyConfiguration) {
        this.keyConfiguration = keyConfiguration
    }

    moveHorizontal(player: Player, dx: number) {
        this.keyConfiguration.remove()
        player.move(dx,0)
    }

    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        this.keyConfiguration.setColor(g);
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    moveVertical(player: Player, dy: number) {
        this.keyConfiguration.remove()
        player.move(0,dy)
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class KeyConfiguration {
    private _color: string;
    private _removeStrategy: RemoveStrategy;
    private _lock1: boolean;

    constructor(color: string, removeStrategy: RemoveStrategy, lock1: boolean) {
        this._color = color;
        this._removeStrategy = removeStrategy
        this._lock1 = lock1;
    }


    setColor(g: CanvasRenderingContext2D) {
        g.fillStyle = this._color
    }

    remove(): void {
        remove(this._removeStrategy)
    }

    get lock1(): boolean {
        return this._lock1;
    }
}

class Box implements Tile {
    private fallStrategy: FallStrategy

    constructor(falling: FallingState) {
        this.fallStrategy = new FallStrategy(falling)
    }

    moveHorizontal(player: Player, dx: number) {
        this.fallStrategy.moveHorizontal(player, this, dx)
    }

    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        g.fillStyle = "#8b4513";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }


    moveVertical(player: Player, dy: number) {
    }

    update(y: number, x: number) {
        this.fallStrategy.update(this, y, x);
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class Stone implements Tile {
    private fallStrategy: FallStrategy

    constructor(falling: FallingState) {
        this.fallStrategy = new FallStrategy(falling)
    }

    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        g.fillStyle = "#0000cc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    moveHorizontal(player: Player, dx: number) {
        this.fallStrategy.moveHorizontal(player, this, dx)
    }

    moveVertical(player: Player, dy: number) {
    }

    update(y: number, x: number) {
        this.fallStrategy.update(this, y, x);
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class PlayerTile implements Tile {
    draw(y: number, x: number, g: CanvasRenderingContext2D) {
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    moveHorizontal(player: Player, dx: number) {
    }

    moveVertical(player: Player, dy: number) {
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class Unbreakable implements Tile {
    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        g.fillStyle = "#999999";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    moveHorizontal(player: Player, dx: number) {
    }

    moveVertical(player: Player, dy: number) {
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class Flux implements Tile {
    draw(y: number, x: number, g: CanvasRenderingContext2D) {
        g.fillStyle = "#ccffcc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    isAir(): boolean {
        return false;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }

    moveHorizontal(player: Player, dx: number) {
        player.move(dx,0)
    }

    moveVertical(player: Player, dy: number) {
        player.move(0,dy)
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Resting();
    }
}

class Air implements Tile {
    draw(y: number, x: number, g: CanvasRenderingContext2D) {

    }

    isAir(): boolean {
        return true;
    }

    isLOCK1(): boolean {
        return false;
    }

    isLOCK2(): boolean {
        return false;
    }


    moveHorizontal(player: Player, dx: number)
    {
        player.move(dx,0)
    }

    moveVertical(player: Player, dy: number) {
        player.move(0,dy)
    }

    update(y: number, x: number) {
    }

    getBlockOnTopState(): FallingState {
        return new Falling();
    }
}


interface Input {
    handle(player: Player): void;
}

class Right implements Input {
    handle(player: Player) {
        player.moveHorizontal(1);
    }
}

class Left implements Input {
    handle(player: Player) {
        player.moveHorizontal(-1);
    }
}

class Down implements Input {
    handle(player: Player) {
        player.moveVertical(1);
    }
}

class Up implements Input {
    handle(player: Player) {
        player.moveVertical(-1);
    }
}

let rawMap: RawTile[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 0, 1, 1, 2, 0, 2],
    [2, 4, 2, 6, 1, 2, 0, 2],
    [2, 8, 4, 1, 1, 2, 0, 2],
    [2, 4, 1, 1, 1, 9, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
];

class Player {
    private x = 1;
    private y = 1;

    moveHorizontal(dx: number) {
        map[this.y][this.x + dx].moveHorizontal(this, dx)
    }

    moveVertical(dy: number) {
        map[this.y + dy][this.x].moveVertical(this, dy)
    }

    move(dx: number, dy: number) {
        this.moveToTile(this.x + dx, this.y + dy);
    }

    draw(g: CanvasRenderingContext2D) {
        g.fillStyle = "#ff0000";
        g.fillRect(this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    pushHorizontal(tile:Tile, dx:number) {
        if (map[this.y][this.x + dx + dx].isAir()
            && !map[this.y + 1][this.x + dx].isAir()) {
            map[this.y][this.x + dx + dx] = tile;
            this.moveToTile(this.x + dx, this.y);6
        }
    }

    moveToTile(newx: number, newy: number) {
        map[this.y][this.x] = new Air();
        map[newy][newx] = new PlayerTile();
        this.x = newx;
        this.y = newy;
    }
}

let player = new Player();

let map: Tile[][];

function assertExhausted(x: never) {
    throw new Error("Unexpected object : " + x);
}

function transformTile(tile: RawTile) {
    switch (tile) {
        case RawTile.AIR:
            return new Air()
        case RawTile.FLUX:
            return new Flux()
        case RawTile.UNBREAKABLE:
            return new Unbreakable()
        case RawTile.PLAYER:
            return new PlayerTile()
        case RawTile.STONE:
            return new Stone(new Resting())
        case RawTile.FALLING_STONE:
            return new Stone(new Falling())
        case RawTile.BOX:
            return new Box(new Resting())
        case RawTile.FALLING_BOX:
            return new Box(new Falling())
        case RawTile.KEY1:
            return new Key(new KeyConfiguration("#ffcc00", new RemoveLock1(), false))
        case RawTile.LOCK1:
            return new Lock1(new KeyConfiguration("#ffcc00", new RemoveLock1(), true))
        case RawTile.KEY2:
            return new Key(new KeyConfiguration("#00ccff", new RemoveLock2(), false))
        case RawTile.LOCK2:
            return new Lock1(new KeyConfiguration("#00ccff", new RemoveLock2(), false))
        default:
            assertExhausted(tile)
    }
}

function transformMap() {
    map = new Array(rawMap.length);
    for (let y = 0; y < rawMap.length; y++) {
        map[y] = new Array(rawMap[y].length)
        for (let x = 0; x < rawMap[y].length; x++) {
            map[y][x] = transformTile(rawMap[y][x]);
        }
    }
}
let inputs: Input[] = [];

function remove(shouldRemoev: RemoveStrategy) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (shouldRemoev.check(map[y][x])) {
                map[y][x] = new Air();
            }
        }
    }
}

class RemoveLock1 implements RemoveStrategy {
    check(tile: Tile): boolean {
        return tile.isLOCK1()
    }
}

class RemoveLock2 implements RemoveStrategy {
    check(tile: Tile): boolean {
        return tile.isLOCK2()
    }
}

interface RemoveStrategy {
    check(tile: Tile): boolean;
}

function handleInputs() {
    while (inputs.length > 0) {
        let input = inputs.pop();
        input.handle(player)
    }
}

function updateMap() {
    for (let y = map.length - 1; y >= 0; y--) {
        for (let x = 0; x < map[y].length; x++) {
            map[y][x].update(y, x);
        }
    }
}

function update() {
    handleInputs();
    updateMap();
}

function drawMap(g: CanvasRenderingContext2D) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            map[y][x].draw(y, x, g)
        }
    }
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
    player.draw(g);
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
    transformMap()
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

