var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
var x = 0;

var sprite = new Image();
sprite.src = 'explosion_sheet.png';

sprite.onload = function() {                                    // ПОДІЯ
    tick();
}

function tick(){
    setTimeout(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(sprite, x, 0, 134, 134, 0, 0, 134, 134);
        if (x < 1608) {
            x = x + 134;
        }
        requestAnimationFrame(tick);
    }, 70);
}


// DEFINITION (x;y) for my ctx.drawImage(sprite, my-x-for sprite, my-y-for-sprite-0, 134, 134, X-HERE, Y-HERE, 134, 134);:
// x = x-proect. - y-proect. + y-central;
// y = 2*y-central - y-proection;

