var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle="green";
ctx.fillRect(150,250,250,150);
ctx.fill();

ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.moveTo(140, 260);
    ctx.lineTo(275, 150);
    ctx.lineTo(410, 260);
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'crimson';
    ctx.lineWidth = 15;             // FIX
    ctx.stroke();

ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = 'crimson';
    ctx.arc(750, 100, 60, 0, 2*Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.lineWidth = 30;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.stroke();
ctx.closePath();