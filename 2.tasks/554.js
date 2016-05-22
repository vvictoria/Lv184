'use strict';

var max = 100;

var p3 = [];

for (var x = 1; x < max; x++) {
    for (var y = 1; y < max; y++) {
        for (var z = 1; z < max; z++) {

            if (x <= y && y <= z && z <= max) {

                if ( Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2) ) {
                    p3.push([x, y, z]);
                    console.log('Triplet:', x, y, z);
                }
            }

        }
    }
}
console.log('Number of triplets:', p3.length);