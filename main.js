function preload() {

}

function setup() {
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
}

function draw() {
image(video,0,0,600,500)
circle(50,50,50,);
circle(570,50,50);
circle(40,450,50);
circle(570,450,50);
rect(30,450,550,20);
rect(50,50,500,20);
rect(50,50,20,390);
rect(570,50,20,390);
fill("plum");
stroke("red");

}

function takeSnapShot() {
    save("pic.png")
}