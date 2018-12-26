var game =
{
  canvas: false,
  ctx: false,
  init: function()
  {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    game.mapEntities.create(100,100,5,'rgb(0,0,0)');
    game.mapEntities.create(200,100,20,'rgb(0,0,0)');

    setInterval(game.update, 1000/30);

    window.requestAnimationFrame(game.draw);
  },
  update: function()
  {
    game.mapEntities.update();
  },
  draw: function()
  {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    //game.drawCircle(100,100,5,'rgb(0,0,0)');
    //game.drawCircle(200,100,20,'rgb(0,0,0)');
    game.mapEntities.draw();

    window.requestAnimationFrame(game.draw);
  },
  drawCircle: function(x,y,r,color)
  {
    game.ctx.beginPath();
    game.ctx.arc(x,y,r,0,2*Math.PI);
    game.ctx.fillStyle = color;
    game.ctx.fill();
  }
};

game.mapEntities =
{
  list: {},
  idCounter: 0,
  init: function ()
  {

  },
  create: function (x,y,r,color)
  {
    var entity =
    {
      id: ++this.idCounter,
      x:x,
      y:y,
      r:r,
      color:color,
      update: function()
      {
        this.x++;
        this.y++;
      },
      draw: function()
      {
        game.drawCircle(this.x, this.y, this.r, this.color);
      },
    };
    this.list[entity.id] = entity;
    return entity;
  },
  update: function()
  {
    for(i in this.list) this.list[i].update();
  },
  draw: function()
  {
    for(i in this.list) this.list[i].draw();
  }
}
