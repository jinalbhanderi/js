var n = 153
var sum = 0
var temp=n
while (n != 0) {
    var rem = n % 10
    sum = sum + (rem * rem * rem)
    n /= 10
}
if (sum == temp) {
    console.log("no is arm");
}
else {
    console.log("no is not arm");
}