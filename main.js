song1="";
song2="";

function setup(){
     canvas = createCanvas(470, 450);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();

}

function play(){
    song.play();
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);

}