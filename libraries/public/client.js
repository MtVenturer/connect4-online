var socket;

function setup(){
    createCanvas(600,600);
    background(51);
    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing);
}