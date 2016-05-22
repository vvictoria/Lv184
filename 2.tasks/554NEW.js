'use strict';

var readlineSync = require('readline-sync');

var max = parseInt(readlineSync.question('Please type maximum natural number :'));
while ( isNaN(max) || (max < 1)) {
    max = parseInt(readlineSync.question('You entered something wrong. Please type maximum natural number :'));
}
if (max < 6) {
    max = parseInt(readlineSync.question('You entered too small figure for this task. Please type maximum natural number, which is bigger than five:'));
}

var p3 = [];

for (var x = 1; x < max; x++) {
    for (var y = 1; y < max; y++) {
        for (var z = 1; z < max; z++) {

            if (x < y && y < z && z <= max) {

                if ( Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2) ) {
                    p3.push([x, y, z]);
                    console.log('Triplet:', x, y, z);
                }
            }

        }
    }
}
console.log('Number of triplets:', p3.length);