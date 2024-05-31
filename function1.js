function hello(){
    console.log('hellow world');
}

function Dog(){
    this.name=name;
}

const maxx = Dog('maxx');
console.log(maxx);
console.log(globalThis.name);

const lucy = new Dog('Lucy');
console.log('>>lucy', lucy);

function printFnReturnValue(fn){
    console.log(fn.name, fn());
    return undefined;
}

const ret = printFn