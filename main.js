function preload(){
}

function setup(){
   canvas = createCanvas(500 , 400);
   canvas.position(70,250);
   video = createCapture(VIDEO)
   video.hide();
   tint_color = ""
}

function draw(){
  image(video,100,80,300,250)

  stroke(0, 187, 255)
  fill(0, 187, 255)

  circle(40,40,50);
  circle(460,40,50);
  circle(40,360,50);
  circle(460,360,50);

  stroke(255, 196, 0)
  fill(255, 196, 0)

  rect(63,27,375,25);
  rect(63,347,375,25);
  rect(27,63,25,275);
  rect(448,63,25,275);

  tint(tint_color);
}

function take_snapshot(){
      save('your_name.png')
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}