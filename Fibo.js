function calculoFibo(num){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for(var i = 2; i < num; i++){
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci
}

var n = calculoFibo(10)
console.log(n)