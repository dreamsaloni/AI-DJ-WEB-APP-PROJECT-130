song1 = "";
song2 = "";
leftWrist = 0;
rightWrist = 0;

function preload()
{
    song1 = loadSound("Love-Nwantiti_320(PagalWorldl).mp3");
    song2 = loadSound("No-Lie_320(PagalWorldl).mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
      circle(leftWrist, 20);
      InNumberleftWristY = Number(leftWristY);
      remove_decimals = floor(InNumberleftWristY);
      volume = remove_decimals/500;
      document.getElementById("song").innerHTML = "Song = " + song1;
      song.stop(song2);
    }

    if(song1 = false){
       song.play(song1);
       document.getElementById("song").innerHTML = "Song = " + song1;
    }

    if(scoreRightWrist > 0.2)
    {
      circle(leftWristX, leftWristY, 20);
      InNumberleftWristY = Number(leftWristY);
      remove_decimals = floor(InNumberleftWristY);
      volume = remove_decimals/500;
      document.getElementById("song").innerHTML = "Song = " + song2;
      song.stop(song1);
    }

    if(song2 = false){
       song.play(song2);
       document.getElementById("song").innerHTML = "Song = " + song2;
    }
}

function modelLoaded()
{
    console.log("Posenet is Intialized");
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {console.log(results);

   leftWrist = results[0].pose.leftWrist;
   console.log("LeftWrist  = " + leftWrist);
   
   rightWrist = results[0].pose.rightWrist;
   console.log("rightWrist  = " + rightWrist);

    }
}