window.onload = function()
{
  ctx = document.getElementById('canvas').getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";

  window.addEventListener("keydown", function(e) {
    if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
    });
    window.addEventListener("keyup", function(e) {
    if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
    });
    window.addEventListener("keydown", function(e) {
        // space, page up, page down and arrow keys:
        if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
};

var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

const MAP_H = 40;
const MAP_W = 80;

const TILE_H = 20;
const TILE_W = 20;

function char()
{
    this.x = 40;
    this.y = 40;
}

var player = new char();

function drawGame()
{
    for(var y = 0; y < MAP_H; y++)
    {
        for(var x = 0; x < MAP_W; x++)
        {
            ctx.fillStyle = "#bffca4";

            ctx.fillRect(x*TILE_W, y*TILE_H, TILE_W, TILE_H);
        }
    }

    drawPlayer();
   requestAnimationFrame(drawGame);
}

function drawPlayer()
{
    if(keysDown[38]) player.y -=1;
    if(keysDown[40]) player.y +=1;
    if(keysDown[39]) player.x +=1;
    if(keysDown[37]) player.x -=1;


    ctx.fillStyle = "#0000ff";
    ctx.fillRect(player.x, player.y, TILE_W, TILE_H);
}

