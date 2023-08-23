img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: Detectando Objetos"; 
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF00000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF00000");
    rect(30, 60, 450, 350 );

    fill("FF0000");
    text("Gato", 320, 120);
    noFill();
    stroke("FF0000");
    rect(300, 90, 270, 320 );
}

function modelLoaded() {
    console.log("Modelo Cargado!")
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}