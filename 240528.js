function f() {
    const id = 1;
    console.log('this.id=',this.id);

}
globalThis.id = 'globalThis';
this.id = 'module this';
var id = 5;

f();

const f2 = () => console.log('this.id=', this.id);

f2();

function f(x,y){
    const id =1;
    console.log('>> x y : ', x, y);
}

const user = { id: 1, name: 'Hong'};
const newF = f.bind(user);
newF(1,11);

f.call(user,2,22);
f.apply(user,[3,33]);
f.call(globalThis, 4, 44);
f(4,44);

console.log('-------------------');

