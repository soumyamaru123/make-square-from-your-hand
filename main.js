function setup(){
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(500,500);
    canvas.position(500,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
    background('#0000ff');
}

function modelLoaded(){
    console.log("PoseNet is initialise");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
