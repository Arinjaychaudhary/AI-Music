Dynamite = "";
Permission_to_dance = "";
function preload(){
    Dynamite = loadSound("BTS-Dynamite-(TrendyBeatz.com).mp3");
    Permission_to_dance = loadSound("BTS-Permission-To-Dance-(TrendyBeatz.com).mp3");
}

function setup(){
    canvas = createCanvas(800,400);
    canvas.position(400,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,800,400);
}