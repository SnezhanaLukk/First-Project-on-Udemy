// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
        for (let i = 0; i<arr.length; i++){
    result[i]= arr[i];}
    console.log(arr);
    console.log(result);
    
    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}


// const data = [5, 10, 'Shopping', 20, 'Homework'];
//         for (let i = 0; i<data.length; i++){
//             if (typeof(data[i]) === 'string'){
//             data[i]=data[i]+' - done';
//              } else {data[i] = data[i] * 2;}
//         }
//         console.log(data);


    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    // for (let i=0; i<data.length; i++)
    // result [i]=data[data.length-i-1];
    // console.log(data);
    // console.log(result);


const lines = 5;
let result = '';
 
for (let i=0; i<=lines; i++){
    
    for (let j=5-i; j>0; j--){
        result= result+ ' ';
    }
    for (let k=0; k<i*2+1;k++){
        result=result+'*'
    }
    result=result +'\n';
}
console.log(result);

