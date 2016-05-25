'use strict';

process.stdin.setEncoding('utf8');

process.stdout.write('Please type maximum natural number: ');

var p3 = [];
process.stdin.on('data', function (max) {
    if ( isNaN(max) || (max < 1)) {
        process.stdout.write('You entered something wrong. Please type maximum natural number :');
    }
    else if (max < 6) {
        process.stdout.write('You entered too small figure for this task. Please type maximum natural number, which is bigger than five:');
    } else {
        for (var x = 1; x < max; x++) {
                for (var y = 1; y < max; y++) {
                    for (var z = 1; z < max; z++) {

                        if (x < y && y < z && z <= max) {

                            if ( Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2) ) {
                                p3.push([x, y, z]);
                                process.stdout.write('Triplet: ' + x + ' ' + y + ' ' + z + '\n');
                            }
                        }

                    }
                }
            }
        process.stdout.write('Number of triplets: ' + p3.length + '\n');
        process.stdin.end();
    }
});