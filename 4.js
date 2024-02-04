const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs () {
        const {age}=personalPlanPeter;
        const {languages}=personalPlanPeter.skills;
        let b='';
        for (i=0; i<languages.length; i++){
            let a = languages[i].toUpperCase();
            b = i<languages.length ? b+a+' ' : b + a;
            // if(i<languages.length){
            //     b=b+a+' ';
            // }else{
            //     b=b+a;
            // }
        }
        return `Мне ${age} и я владею языками: ${b}`;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
    const copyPlan = plan;
    const {exp}=copyPlan.skills;
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let res = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        res += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return res;
}
showProgrammingLangs(personalPlanPeter);


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let res = '';
    if (arr.length<1){
        console.log ('Семья пуста');
        return 'Семья пуста';
    }else{
    for (let i=0; i<arr.length; i++){
        let a = arr[i];
        res = i<arr.length ? res+a+' ' : res + a;
    }
    console.log(`Семья состоит из: ${res}`);
    return `Семья состоит из: ${res}`; 
    }   
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let b='';
    for (i=0; i<arr.length; i++){
        let a = arr[i].toLowerCase();
        b = i<(arr.length-1) ? b+a+'\n' : b + a;
    }
    console.log(b);
    return b; 
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str)==='string'){
        const arr=str.split('');
        let res='';
        const arr2=arr.reverse();
            for (i=0;i<arr.length; i++){
                res=res+arr2[i];
            }
        console.log(res);
        return res;
    } else {
        console.log ('Ошибка!');
        return 'Ошибка!';
    }

}

reverse(someString)

const baseCurrencies = ['USD', 'EUR', 'UAH', 'RUB'];
const additionalCurrencies = 'UAH';

function availableCurr(arr, missingCurr) {
    str='';
    arr.length<1?str="Нет доступных валют":str='Доступные валюты:\n';
    
    for (let i=0;i<arr.length; i++){
        if(arr[i]!==missingCurr)
        str+=`${arr[i]}\n`;
    }
    console.log(str);
    return str;
}

availableCurr(baseCurrencies, additionalCurrencies)