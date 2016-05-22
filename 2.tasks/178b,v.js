'use strict';

var min = 1;
var max = 100;
var N = [];
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