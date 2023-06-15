y = 0;
x = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as:" + content;
    if (content == "apple")
    {
        x = Math.floor (Math.random()* 400);
        y = Math.floor (Math.random()* 700);
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_circle = "set";
    }
    
}

function setup ()
{
    canvas = createCanvas (900, 600);
}

function draw ()
{
    if (draw_apple == "set")
    {
        radius = Math.floor(Math.random()* 100);
        apple (x,y,radius);
        document.getElementById("status").innerHTML = "Apple is drawn. ";
        draw_apple = "";
    }

}