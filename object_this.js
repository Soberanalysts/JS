globalThis.name='GLOBAL';

const obj = {
    name: 'OBJ',
    //property
    f1: function(){
        console.log('f1=', this.name);
    },
    f2: () => {
        console.log('f2=', this.name);
    },
    f3() {
        //method
        console.log('f3=',this.name);
    }
    
};

obj.f1();
obj.f2();
obj.f3();



const nm=obj.name;
console.log('------------------------');        

const f11=obj.f1;
const f22=obj.f2;   //arrow function
const f33=obj.f3;

//f11();
f22();
//f33();

Object.getPrototypeOf(obj).__proto__.f3();


class Dog{
    f1(){
        console.dog('Dog.f1', this.name);
    }
}