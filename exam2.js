
const t0 = performance.now();
for(let i = 0.1; i < 1; i = i + 0.1) 
    // {
        // if(i<1)
        //     {            
        //     console.log(i.toFixed(1));
        // }
        // else
        // {            
        //     console.log(Math.floor(i));
        // }
        //소수점 오차로 인해 마지막 1.0뜬 소스
    //     if (i + 0.1 >= 1) {
    //         console.log(Math.trunc(i.toFixed(1))); 
    //         // 마지막 행에서 1 출력, 0.99999로 인식할 수 있어서 반올림 후 정수부분만 출력
    //     } else {
    //         console.log(i.toFixed(1));
    //         //Number로 싸기만 해도 됨
    // //            console.log(Number(i.toFixed(1)));
    {console.log(Number(i.toFixed(1)));
    }
    const t1 = performance.now();

    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

console.log('---------------------');
let j;
for(let i = 1; i <= 10; i += 1)
    {
        j=Math.sqrt(i);
        if(j-Math.trunc(j)>0) //if(sq%1),if((sq%1) !== 0)
            {
                console.log(j.toFixed(3));
            }
    } //좀더 간소하게 짜보기
const num=123.456;
console.log(num.toFixed(2));
console.log(Math.sqrt(3));
// console.log(num, Math.trunc(Number(num.toFixed(2))+9));
console.log('---------------------');
const today = new Date();  
j=today.getDay();
console.log(today);
console.log(j);
switch(j)
{
    case 1:
        console.log('월');
        break;
    case 2:
        console.log('화');
        break;
    case 3:
        console.log('수');
        break;
    case 4:
        console.log('목');
        break;
    case 5:
        console.log('금');
        break;
    case 6:
        console.log('토');
        break;
    case 7:
        console.log('일');
        break;
}

const WEEK_NAMES = '일월화수목금토';
console.log(WEEK_NAMES[j]);

console.log('---------------------');
function getLen(s)
{
    return(s ?? '').toString().length;
}
function addPoints(a, b) 
{
    // let aa,bb,sum;
    // let l_aa,l_bb;
    // aa=(a.toString()).split('.');
    
    // bb=(b.toString()).split('.');
    // sum=a+b;
    // l_aa=aa[1].length;
    // l_bb=bb[1].length;

    // if(l_aa>l_bb)
    // {
    //     console.log(sum.toFixed(l_aa));
    // }
    // else
    // {
    //     console.log(sum.toFixed(l_bb));
    // }
/////////////////////////////////////////////////////

    // let len = getLen(a);
    // if(getLen(b) > len) len = getLen(b);

    // const alen = getLen(a);
    // const blen = getLen(b);
    // const len = aLen > bLen ? aLen : bLen;

    const len = Math.max(getLen(a), getLen(b));

    const ret = (a+b).toFixed(len -2);
    console.log('>>len:', len, ret);

}
addPoints(0.1234, 0.21);

