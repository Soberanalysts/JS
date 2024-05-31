function f(){
    let count =0;
    return {
        count: count,
    };
}
const x =f();
console.log('>> x count', x.count);

function f2(){
    let count =0;
    return function (){
        return count;
    };
}

