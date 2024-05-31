// let a =1, b=2;
let a = 1;
let b = 2;

// const c = (a++, b++);
// const c = ((a = a + 1), (b = b + 1));
// console.log('c =', c, a, b);

// let c = (a++, b++);
// //==> a = a + 1; let c = b; b = b + 1;
// let c = (a++, ++b);
// //==> a = a + 1; let c = b; let c = b;

let d = (a--, b + a);
console.log('d =', d, a, b);


for(let i = 0; i < 10; i = i + 1){
    console.log(i);
}

// d=void(c=a+b);
// console.log(a,b,c,d);

console.log('_______________');

const first = 'Uncle';
const last = 'Bob';
if(first){
    console.log(first);
}
console.log(last);

let fullName = first ? first + ' ':''
//  'Uncle ' + 'Bob'
//  '' + 'Bob'
fullName = fullName + last;
console.log('fullName =',fullName);

console.log(`${first}${first ? ' ' :''}${last}`)

console.log('_______________');
const bi = 0b101;
const oct = 0b101;
const hex = 0b101;
console.log(parseInt('101',2));
console.log(bi, oct, hex);
console.log(parseInt('101',36));
console.log(parseFloat('10.100'));
console.log(Number('10.100'));

console.log(Infinity);
//javascript가 표현할 수 있는 가장 큰수
console.log(Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log('_______________');

const num=123.456;
console.log(num.toFixed(2));
console.log(num, Math.trunc(Number(num.toFixed(2))+9));

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.7);
console.log(0.3 + 0.7);
const ep = Math.abs(three - 0.3)
console.log(three);


//1이면 one, 2면 two, 3이면 four, 그외 etc
let i=0;
    if(i==1)
    {
        console.log('one');
    }
    else if(i==2)
        {
        console.log('two');
        
    }
    else if(i==3)
        {
            console.log('four');
            
        }
    else{
            console.log('etc');
            
        }

    let oustStr ='etc';
    if(i==1)
    {
        oustStr='one'
    }
    else if(i==2)
    {
        oustStr='two'
    }
    else if(i==3)
        {
    console.log('four');        
        }
    else{
            console.log('etc');            
        }

        //switch문


        //3항 연산자
    // outStr = x === 1 ? 'one' : x === 2 ? 'two' : x===3 ? 'four' : 'etc'

    console.log('================================')
    let j =5;
    while(j>0){
    console.log('j : ', j);
    j=j-1;
    }
    j=5;
    while(j-- >0)
        {
            console.log('j : ',j);
        }
    j=5;
    do{
        console.log('j:', j);
    }while(j-->1);

    console.log('-------------------------------');
    //1. while
    i=0;
    sum=0;
    while(i++<100){
        //console.log('i = ', i);
        sum += i;
    }
    console.log('sum = ', sum);
    //2. for
    sum=0;
    for(i=1;i <= 100;i++)
        {
            //console.log('i:',i);
            sum +=i;
        }
        console.log('sum = ', sum);

    //배열 출력하기
    const arr = [1,2,3,4,5];
    for(let i =0; i<arr?.length; i++){
        console.log('arr[${i}]:', arr[i]);
    }
    // for(const t of arr){
    //     console.log('t:',t);
    // }
    for(const t of arr){
        console.log('t:',t);
        if(t>2) break; //t가 2보다 크면 멈추기
    }

    console.log('------------------------');
    for(const t of arr){
        if(t%2===0) continue; //2의 배수이면 뒷부분 skip
        
        console.log('t:',t);
    }
    
    //in은 property연산자
    const user = { id: 1, name: 'Hong'};
    for (const p in user){
        console.log('p:',p, user[p]); // user['id']
        // console.log('p:', user[p]);
    }
    
    
    const WEEK_NAMES = '일월화수목금토'
    for (const w of WEEK_NAMES){
        console.log('w:',w); // user['id']
        // console.log('p:', user[p]);
    }
    console.log('------------------------');
    // const cart ={
    //     user:user,
    //     items: [
    //         {id:100, itemName:'신라면'},
    //         {id:200, itemName:'너구리'}
    //     ],
    // }

    // console.log('cartOwner=', cart.user.name);
    // for(const cc in cart){
    //     if(cc=='user'){
    //         for(const item of cart[cc]){
    //             console.log()
    //         }
    //     }
    // }
let total =0;
function add(x,y){
    total= x+y;
}

    const 국어 = 80;
    const 수학 = 70;

    add(국어,수학);


    console.log('total:', total);
    function checkScore60(){
    if(국어>70){
        return '합격';
    } else if (수학 > 70){
        return '합격';
    } else{
        return '불합격';
    }
}
    function checkScore100(){
    if(국어>70){
        return '합격';
    }
    if (수학 > 70){
        return '합격';
    } 
        return '불합격';
    
}
    console.log(checkScore60());
    console.log(checkScore100());


    console.log('+++++++++++++++++++++++++');
    const dt = new Date();
    console.log('dt:',dt, dt.getDate());
