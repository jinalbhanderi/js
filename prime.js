var n = 13;
if (n == 1 || n == 2) {
    console.log("no is not prime");
}
else {
    for (let i = 2; i = n - 1; i++) {
        if (n % i == 0) {
            console.log("no is not prime");
            break;
        }
        else{
            console.log("no is prime");
            break;
        }
    }
}