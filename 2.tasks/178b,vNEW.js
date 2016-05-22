'use strict';

var readlineSync = require('readline-sync');

var min = parseInt(readlineSync.question('Please type first natural number :'));
while ( isNaN(min) || (min < 1)) {
    min = parseInt(readlineSync.question('You entered something wrong. Please type first natural number :'));
}

var max = readlineSync.question('Please type second natural number :');
while ( isNaN(max) || (max < 1) || min == max) {
    max = parseInt(readlineSync.question('You entered something wrong. Please type second natural number :'));
}

var N = [];
if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
}
while (min <= max) {
    N.push(min);
    min++;
}

var ak = 0;
for (var i = 0; i<N.length; i++) {
    if (N[i] % 3 == 0 && N[i] % 5 != 0) {
        ak++;
        // console.log('case 1:', N[i]);
    }
}
console.log(ak);
ak = 0;
for (var i = 0; i<N.length; i++) {
    if (Math.sqrt(N[i]) % 2 == 0) {
        ak++;
        // console.log('case 2:', N[i]);
    }
}
console.log(ak);