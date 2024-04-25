function sum(a, b, c, d){
    return a + b + c + d;
}
console.log(sum(11, 12, 13, 14));

function math(a, b) {
    for ( let i = 0; i < 3; i++ ){
        a++;
        b--;
    }
    return a + b;
}

console.log(math(1, 4));



function getMathResult(a, b) {
    if ( typeof(b) !== 'number' && b <= 0 ){
        return a;
    }
    
    
    let result = a;
    let str = a;
    for ( let i = 1; i < b; i++ ){
        result *= a;
        str += '---' + result;
    }

    return str;



}
console.log(getMathResult(5, 5));

