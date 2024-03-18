function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(1000, 250)

    video = createCapture(VIDEO);
    video.position(250, 250);
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}

function draw(){
    background("#4abf3d");
}