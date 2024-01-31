// function ret(){
//     let num = 50;
//     num=num-34;
//     return num;
// }
// const abc=ret();
// console.log(abc);


// function sayHello(userName) {
//     let helloUser = 'Привет, ' + userName + '!';
//     return helloUser;
//     }
// console.log(sayHello('Антон'));


// function returnNeighboringNumbers(a) {
//     const arr = [ a-1, a, a+1];
//     return arr;
// }
// console.log(returnNeighboringNumbers(6));



// function getMathResult(a, b) {
// let c='';
// if (typeof(b) === 'number' && b > 0) {
//     for (let i = 1; i <= b; i++) {
//         if (i===b){
//             c=c+a*i;
//         }else{
//             c = c + a*i + '---'; 
//         }
//     }
//     return c;
// } else if (typeof(b) !== 'number' || b <= 0) return a;
// }
// console.log(getMathResult(3, 3));


// function calculateVolumeAndArea(lengthEdgeOfCube) {
//     if (lengthEdgeOfCube>=0 && typeof(lengthEdgeOfCube)==='number' && lengthEdgeOfCube%1===0){
//     let i = 'Объем куба:' + lengthEdgeOfCube*lengthEdgeOfCube*lengthEdgeOfCube + ', площадь всей поверхности:' + 6*lengthEdgeOfCube*lengthEdgeOfCube;
//     console.log(i);}
//     else console.log('При вычислении произошла ошибка');
// }
// calculateVolumeAndArea(15.5);



// function getCoupeNumber(place) {
//     if (place>0 && place<37 && typeof(place)==='number' && place%1===0){
//         let i = 9 - place/4;
//         let j = 9-parseInt(i);
//         console.log(j);
//     } else if (place<1 || place>36){
//         console.log('Таких мест в вагоне не существует');
//     } else {console.log('Ошибка. Проверьте правильность введенного номера места');}
// }
// getCoupeNumber(0);


// Место для первой задачи
function getTimeFromMinutes(minutesAll) { 
    if (typeof(minutesAll) !== 'number' || minutesAll < 0 || !Number.isInteger(minutesAll)) {
        console.log('Ошибка, проверьте данные');
        return ("Ошибка, проверьте данные");
}
    const hours = Math.floor(minutesAll / 60);
    const minutes = minutesAll % 60;
    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(-150);



//Место для второй задачи
function findMaxNumber(a, b, c, d) {
if (typeof(a) !== 'number' || typeof(b) !== 'number'|| typeof(c) !== 'number'|| typeof(d) !== 'number'){
    console.log('0');
} else {
    console.log(Math.max(a, b, c, d));
}
}
findMaxNumber(6, 3, '12', 8);

// function fib(a) {
//     if (typeof(a) !== 'number' || a <= 0 || !Number.isInteger(a)) {
//         return "";
//     }
//     let arr = [0, 1];
//     let b=0, c=1, d=0;
//     for (let i = 2; i<a; i++){
//         arr[i]= b+c;
//         d=c+b;
//         b=c;
//         c=d;
//     }
//    return arr;
// }
// console.log(fib(8));



function fib(a) {
    if (typeof(a) !== 'number' || a <= 0 || !Number.isInteger(a)) {
        return "";
    }
    let res = '';
    let b=0, c=1, d=0;
    for (let i = 0; i<a; i++){
        if(i+1 === a){
            res = res + `${b}`;
        } else{
            res = res + `${b} `;
        }
        d=c+b;
        b=c;
        c=d;
    }
   return res;
}
console.log(fib(8));


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5)