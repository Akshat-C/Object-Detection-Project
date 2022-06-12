function preload()
{
    img = loadImage("Laptop.jpg");
}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 550, 500);
}
