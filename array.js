var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
stack.unshift();


queue.push(10);
queue.push(20);
queue.push(30);

var queueOutput = queue.shift();
// queue.shift();

// queue.pop();

console.log('>>stack:', stack, stackOutput);
console.log('>>queue:', queue, queueOutput);

const list = ['글1', '글2', '글3'];

function addArticle(article){
    list.unshift(article);
}

function removeOld(){
    list.pop();
}

addArticle('글4');
removeOld();
removeOld();

list.push('글4');


console.log('>>list:',list );
console.log(list.indexOf('글4') );
console.log(list.lastIndexOf('글4') );

const hong = {id:1, name: 'Hong'};
const kim = {id:2, name: 'Kim'};
const park = {id : 3, name: 'Park'};

const users = [hong, kim, park];

// const id2user = users.findIndex((v, i) => {
//     v.id == 2;
// })
// console.log('>> id2user: ', id2user);

const id2userIndex = users.findIndex(v => 
    v.id == 2
);


console.log('>> id2userIndex: ', id2userIndex);



for(const user of users){
    console.log(user.id, user.name);
}


console.log('----------------------');

const end = users[users.length-1];
// const beforeEnd = users[users.length-2];
const beforeEnd = users.at(-2);
//-1이 마지막을 나타냄
console.log('>> end:', end);
console.log('>> beforeEnd: ', beforeEnd);

const arr1 = [1,2];
const arr2 = [3,4];

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

const sortUsers()