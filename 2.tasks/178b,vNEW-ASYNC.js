'use strict';


process.stdout.write('Type smaller and bigger natural numbers: ');
process.stdin.once('data', function (numbers) {
    var array = numbers.toString('utf8').split(" ");

    var N = [];
    while (array[0] <= array[1]) {
        N.push(array[0]);
        array[0]++;
    }

    var ak = 0;
    for (var i = 0; i<N.length; i++) {
        if (N[i] % 3 == 0 && N[i] % 5 != 0) {
            ak++;
        }
    }
    process.stdout.write("First case: " + ak + '\n');
    ak = 0;
    for (var i = 0; i<N.length; i++) {
        if (Math.sqrt(N[i]) % 2 == 0) {
            ak++;
        }
    }
    process.stdout.write("Second case: " + ak + '\n');
    process.stdin.end();
});