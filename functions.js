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

let login = prompt('login', 'login');
let password = prompt('password','password'); 

function checkUser(login, password){
    if ( login === 'admin' && password === 'admin' ) {
        console.log('access accepted');
    } else {
        console.log('access denied');
        console.log(login);
    }
}

checkUser(login, password);


function getMathResult(a, b){
    let result = a;
    let answer;
    for ( let i = 1; i < b; i++ ){
        result *= a;
        console.log(result);
        answer = `${result} + ---`;
    }
    console.log(answer);
}
getMathResult(2, 3);