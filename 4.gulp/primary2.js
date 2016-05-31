let arr = [ "blue", "green" ];
arr.notAnIndex = 123;
Array.prototype.protoProp = 456;

for (var x of arr) {
    console.log(x);
};